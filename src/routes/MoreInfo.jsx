import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { Select } from "components/Select";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useColours } from "hooks/useColours";
import { Checkbox } from "components/Checkbox";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect } from "react";

export default function MoreInfo() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, getValues } = useForm();
  const [additionalInfo, setAdditionalInfo] = useLocalStorage("additional_info_form", {});
  const { data, isLoading } = useColours();

  useEffect(() => {
    if (data) {
      reset({
        ...getValues(),
        favouriteColour: additionalInfo.color,
      });
    }
  }, [data]);

  const onSubmit = (data) => {
    if (isLoading) {
      return;
    }
    setAdditionalInfo({ ...additionalInfo, ...data });
    navigate("/confirmation");
  };

  const handleBackOnClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <PageTitle>Additional Info</PageTitle>
      <Card>
        <form id="additional-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="dark:bg-slate-700 h-[28px] max-w-[16rem] bg-slate-300 rounded"></div>
                <div className="dark:bg-slate-700 h-[38px] bg-slate-300 rounded mt-1"></div>
              </div>
            ) : (
              <Select label="Select your favourite colour" {...register("color")} required>
                <option disabled value="error" hidden>
                  Please try again later
                </option>
                {data?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Select>
            )}

            <Checkbox label="I agree to terms and conditions" defaultChecked={additionalInfo.terms} {...register("terms")} required />
          </div>
        </form>
        <CardActions>
          <Button className="w-full sm:w-auto" variant="outlined" onClick={handleBackOnClick}>
            Back
          </Button>
          <Button className="w-full sm:w-auto" type="submit" form="additional-info">
            Next
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
