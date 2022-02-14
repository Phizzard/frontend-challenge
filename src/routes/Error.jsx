import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function Error() {
  const navigate = useNavigate();
  const [signUpData] = useLocalStorage("sign_up_form", {});

  const onRestart = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <PageTitle>Error</PageTitle>
      <Card>
        <div className="space-y-4">
          <XCircleIcon className="dark:text-red-400 text-red-500 h-24 mx-auto" />
          <PageTitle className="font-normal">
            {signUpData?.name === "Error"
              ? "Uh oh. You used the name 'Error' didn't you? Please try again now"
              : "Uh oh. Something went wrong. Please try again later"}
          </PageTitle>
        </div>
        <CardActions>
          <Button className="w-full sm:w-auto" onClick={onRestart}>
            Restart
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
