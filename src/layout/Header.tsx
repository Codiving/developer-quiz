import Typography from "styles/src/ui/Typography";
import Stack from "styles/src/ui/Stack";
import styled from "@emotion/styled";
import { maxWidth } from "src/common";
import Link from "next/link";

const Container = styled("header", {
  label: "Header"
})(() => ({}));

const Header = () => {
  return (
    <Container>
      <Stack
        maxWidth={maxWidth}
        width="90%"
        height="100%"
        margin="0 auto"
        alignItems="center"
        flexDirection="row"
      >
        <Typography component="h1" fontSize={32}>
          <Link href="/">개발자 상식 Quiz</Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Header;
