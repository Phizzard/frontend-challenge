import { useNavigate } from "react-router-dom";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useSignUp } from "hooks/useSignUp";
import { PartyPopper } from "components/PartyPopper";
import { Notification } from "components/Notification";
import { NotificationArea } from "components/Notification/NotificationArea";
import { Spinner } from "components/Spinner";

export default function Confirmation() {
  const navigate = useNavigate();
  const [signUpData] = useLocalStorage("sign_up_form");
  const [additionalInfoData] = useLocalStorage("additional_info_form");
  const { mutate, isLoading } = useSignUp({
    onError: () => {
      navigate("/error");
    },
    onSuccess: () => {
      navigate("/success");
    },
  });
  const handleNextOnClick = async () => {
    const body = { ...signUpData, ...additionalInfoData };

    mutate(body);
  };

  const handleBackOnClick = () => {
    navigate("/more-info");
  };

  return (
    <>
      <Container>
        <PageTitle>Confirmation</PageTitle>
        <Card>
          <div className="space-y-4">
            <ul>
              <li>
                <span className="font-bold">First Name:</span> {signUpData.name}
              </li>
              <li>
                <span className="font-bold">E-mail:</span> {signUpData.email}
              </li>
              <li>
                <span className="font-bold">Password:</span> {signUpData.password}
              </li>
              <li>
                <span className="font-bold">Favourite Colour:</span> {additionalInfoData.color}
              </li>
              <li>
                <span className="font-bold">Terms and Conditions:</span> {additionalInfoData.terms ? "Agreed" : "Declined"}
              </li>
            </ul>
          </div>
          <CardActions>
            <Button className="w-full sm:w-auto" variant="outlined" onClick={handleBackOnClick}>
              Back
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleNextOnClick} disabled={isLoading}>
              Submit
              {!isLoading && <PartyPopper className="ml-2 -mr-1 text-lg" />}
            </Button>
          </CardActions>
        </Card>
      </Container>
      <NotificationArea>
        <Notification show={isLoading} title="Submitting Information" icon={<Spinner />} />
      </NotificationArea>
    </>
  );
}
