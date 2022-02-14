import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useSignUp } from "hooks/useSignUp";
import { PartyPopper } from "components/PartyPopper";
import { Notification, NotificationArea } from "components/Notification";
import { DescriptionList, DescriptionListItem, DescriptionTerm, DescriptionDetails, DescriptionAction } from "components/DescriptionList";
import { Spinner } from "components/Spinner";

export default function Confirmation() {
  const navigate = useNavigate();
  const [signUpData] = useLocalStorage("sign_up_form", {});
  const [additionalInfoData] = useLocalStorage("additional_info_form", {});
  const { mutate, isLoading } = useSignUp({
    onError: () => {
      navigate("/error");
    },
    onSuccess: () => {
      navigate("/success");
    },
  });
  const [dissmissIsValidNotification, setDissmissIsValidNotification] = useState(false);
  const isValid = !!additionalInfoData && !!additionalInfoData.color && !!signUpData;
  const handleNextOnClick = async () => {
    const body = { ...signUpData, ...additionalInfoData };

    mutate(body);
  };

  const handleBackOnClick = () => {
    navigate("/more-info");
  };

  const renderStatusIcon = (value) => {
    if (!value) {
      return <XCircleIcon className="w-6 text-red-500 dark:text-red-400" />;
    }

    return <CheckCircleIcon className="w-6 text-green-500 dark:text-green-400" />;
  };

  const renderUpdateAction = (value, route) => {
    if (!!value || !route) {
      return;
    }

    return (
      <DescriptionAction>
        <Button variant="text" size="xs" onClick={() => navigate(`${route}?update=true`)}>
          Update
        </Button>
      </DescriptionAction>
    );
  };

  const renderPassword = (value) => {
    if (!value) {
      return;
    }

    return [...value].map(() => "*").join("");
  };

  return (
    <>
      <Container>
        <PageTitle>Confirmation</PageTitle>
        <Card>
          <DescriptionList>
            <DescriptionListItem>
              <DescriptionTerm startIcon={renderStatusIcon(signUpData?.name)}>First Name</DescriptionTerm>
              <DescriptionDetails>{signUpData?.name}</DescriptionDetails>
              {renderUpdateAction(signUpData?.name, "/")}
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm startIcon={renderStatusIcon(signUpData?.email)}>Email</DescriptionTerm>
              <DescriptionDetails>{signUpData?.email}</DescriptionDetails>
              {renderUpdateAction(signUpData?.email, "/")}
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm startIcon={renderStatusIcon(signUpData?.password)}>Password</DescriptionTerm>
              <DescriptionDetails>{renderPassword(signUpData?.password)}</DescriptionDetails>
              {renderUpdateAction(signUpData?.password, "/")}
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm startIcon={renderStatusIcon(additionalInfoData?.color)}>Favourite Colour</DescriptionTerm>
              <DescriptionDetails>{additionalInfoData?.color}</DescriptionDetails>
              {renderUpdateAction(additionalInfoData?.color, "/more-info")}
            </DescriptionListItem>
            <DescriptionListItem>
              <DescriptionTerm startIcon={renderStatusIcon(additionalInfoData?.terms)}>Terms and Conditions</DescriptionTerm>
              <DescriptionDetails>{additionalInfoData?.terms ? "Agreed" : "Declined"}</DescriptionDetails>
              {renderUpdateAction(additionalInfoData?.terms, "/more-info")}
            </DescriptionListItem>
          </DescriptionList>
          <CardActions>
            <Button className="w-full sm:w-auto" variant="outlined" onClick={handleBackOnClick}>
              Back
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleNextOnClick} disabled={isLoading || !isValid}>
              Submit
              {!isLoading || (!isValid && <PartyPopper className="ml-2 -mr-1 text-lg" />)}
            </Button>
          </CardActions>
        </Card>
      </Container>
      <NotificationArea>
        <Notification show={isLoading} title="Submitting Information" icon={<Spinner />} />
        <Notification
          show={!isValid && !dissmissIsValidNotification}
          title="Some fields are missing"
          text="Please update the indicated information to continue."
          icon={<XCircleIcon className="w-6 text-red-500 dark:text-red-400" />}
          onClose={() => setDissmissIsValidNotification(true)}
        />
      </NotificationArea>
    </>
  );
}
