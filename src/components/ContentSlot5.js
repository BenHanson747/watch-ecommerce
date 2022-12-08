import { useForm } from "react-hook-form";

function ContentSlot5 () {

 const { register, handleSubmit, formState: { errors } } = useForm();  

 const submitForm = () => {
  console.log({errors});
 }
 
    return(
     <section className="newsletter section container">
        <div className="newsletter__bg grid">
          <div>
            <h2 className="newsletter__title">
              Subscribe to our <br />
              Newsletter
            </h2>
            <p className="newsletter__description">
              Don't miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons, gifts and
              much more.
            </p>
          </div>

          <form onSubmit={handleSubmit(submitForm)} className="newsletter__subscribe" noValidate>
            <input

              type="email"
              placeholder="Enter your email"
              className={`newsletter__input ${
                      errors.email ? "newsletter__input_error" : ""
                    }`}
            
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Must be a valid email address",
                }
            })} 
            />
            
            <button className="button" type="submit">SUBSCRIBE</button>
          </form>
          <span className="newsletter__error">{errors?.email?.message}</span>
        </div>
      </section>
    );
}; 

export default ContentSlot5;