import { useNavigate } from "react-router-dom";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useSignUp } from "hooks/useSignUp";
import { PartyPopper } from "components/PartyPopper";
import { Notification, NotificationArea } from "components/Notification";
import { DescriptionList, DescriptionListItem, DescriptionTerm, DescriptionDetails } from "components/DescriptionList";
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
          <DescriptionList>
            <DescriptionListItem>
              <DescriptionTerm>First Name</DescriptionTerm>
              <DescriptionDetails>{signUpData.name}</DescriptionDetails>
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm>Email</DescriptionTerm>
              <DescriptionDetails>{signUpData.email}</DescriptionDetails>
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm>Password</DescriptionTerm>
              <DescriptionDetails>{signUpData.password}</DescriptionDetails>
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm>Favourite Colour</DescriptionTerm>
              <DescriptionDetails>{additionalInfoData.color}</DescriptionDetails>
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm>Terms and Conditions</DescriptionTerm>
              <DescriptionDetails>{additionalInfoData.terms ? "Agreed" : "Declined"}</DescriptionDetails>
            </DescriptionListItem>
          </DescriptionList>
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
