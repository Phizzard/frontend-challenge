import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function Success() {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useLocalStorage("sign_up_form");
  const [additionalInfoForm, setAdditionalInfo] = useLocalStorage("additional_info_form");

  useEffect(() => {
    if (!signUpForm || !additionalInfoForm || !signUpForm.name || !signUpForm.email || !signUpForm.password || !additionalInfoForm.color) {
      navigate("/error", { replace: true });
    }

    setSignUpForm({});
    setAdditionalInfo({});
  }, []);

  const onRestart = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <PageTitle>Success!</PageTitle>
      <Card>
        <div className="space-y-4">
          <CheckCircleIcon className="text-green-500 h-24 mx-auto" />
          <PageTitle className="font-normal">You should recieve a confirmation email soon.</PageTitle>
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
