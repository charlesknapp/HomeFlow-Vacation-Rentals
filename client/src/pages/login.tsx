import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, Stack, Typography } from "@pankod/refine-mui";

// Logo
import { homeflowLogo } from "../assets";
// bg
import { loginBg1, loginBg2 } from "../assets";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: '#FCFCFC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
      }}
    >
      {/* LOGIN CONTAINER */}
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          paddingLeft: '0px',
          paddingRight: '0px',
          width: { xs: '180%', md: '100%' }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <img style={{ maxWidth: '200px' }} src={homeflowLogo} alt="Yariga Vacation Rentals" />
            <Typography fontSize={20} mt={1}
              sx={{
                textAlign: 'center'
              }}
            >
              Corperate Vacation Home CMS
            </Typography>
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>

        <Typography fontSize={20} mt={0}
              sx={{
                textAlign: 'center',
                marginBottom: '1rem',
                fontSize: '12px',
                color: '#808191',
                fontWeight: 'semibold',

              }}
            >
              This demo was developed by Cadogy, and is not intended for commercial usage.
        </Typography>

      </Container>

      {/* EXTRA CONTAINER */}
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="imgCarosuel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <img src={loginBg2} alt="Yariga Vacation Rentals" style={{ width: '100%', height: '100vh', objectFit: 'cover', }} />
          </div>
        </Box>
      </Container>

    </Box>
  );
};
