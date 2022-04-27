import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../../styles/Announcement.module.css";

type FormInput = {
    title: string,
    body: string
}
const Anouncements = () =>{
    const { register, handleSubmit} = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) =>{
        console.log(Number(data.body));
    };
    return (
        <div className={styles.dash_wrapper}>
            <h1>Announcements</h1>
            <div className={styles.announcements}>
                <Form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                    <Form.Control className={`${styles.title} ${styles.input}`} type="text" placeholder="Title" autoComplete="off" {...register("title" , { required: true,  }) }/>
                    <Form.Control className={`${styles.body} ${styles.input}`} as="textarea"  placeholder="Announcement" {...register("body", { required: true }) }/>
                    <Button type="submit" className={`my-3 ${styles.btn}`}>Post</Button>
                </Form>
            </div>
        </div>
    );
};

export default Anouncements;