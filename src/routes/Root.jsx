import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { TextInput } from "components/TextInput";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useQueryParams } from "hooks/useQueryParams";

export default function Root() {
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const [signUpForm, setSignUpForm] = useLocalStorage("sign_up_form", {});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSignUpForm({ ...signUpForm, ...data });

    if (queryParams.get("update") === "true") {
      navigate("/confirmation");
      return;
    }

    navigate("/more-info");
  };

  return (
    <Container>
      <PageTitle>Sign Up</PageTitle>
      <Card className="relative">
        <form id="sign_up" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <TextInput label="First Name" defaultValue={signUpForm?.name} {...register("name")} required />
            <TextInput label="Email" defaultValue={signUpForm?.email} {...register("email")} required />
            <TextInput label="Password" defaultValue={signUpForm?.password} {...register("password")} required />
          </div>
          <CardActions>
            <Button className="w-full sm:w-auto" type="submit" form="sign_up">
              Next
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
}
