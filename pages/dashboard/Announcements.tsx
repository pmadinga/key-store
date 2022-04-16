import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../../styles/Dashboard.module.css";

type FormInput = {
    title: string,
    body: string
}
const Anouncements = () =>{
    const { register, handleSubmit} = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) =>{
        console.log(data);
    };
    return (
        <div className={styles.dash_wrapper}>
            <h1>Announcements</h1>
            <div className={styles.announcements}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control className="" type="text" placeholder="Title" {...register("title" , { required: true }) }/>
                    <Form.Control as="textarea"  placeholder="Announcement" {...register("body", { required: true }) }/>
                    <Button type="submit" className="my-3">Post</Button>
                </Form>
            </div>
        </div>
    );
};

export default Anouncements;