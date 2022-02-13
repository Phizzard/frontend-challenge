import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";

export default function Error() {
  const navigate = useNavigate();

  const onRestart = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <PageTitle>Error</PageTitle>
      <Card>
        <div className="space-y-4">
          <XCircleIcon className="text-red-500 h-24 mx-auto" />
          <PageTitle className="font-normal">Uh oh. Something went wrong. Please try again later</PageTitle>
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
