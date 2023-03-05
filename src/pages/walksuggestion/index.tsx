import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    length: number;
    city: string;
    description: string;
};

export default function WalkSuggestion() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();;

    const onSubmit = (data: FormData) => {
        console.log(data);
    }


    return(
        <>
            <div className=" rounded-2xl bg-hike-water bg-cover w-3/4 m-auto">
                <h1 className="m-auto bg-pink-500 rounded-md h-10 py-2 w-1/4 text-center">Suggestion Form</h1>
                <form className=" w-3/4 m-auto flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <label className="bg-slate-500 rounded-md h-10 py-2 w-1/4 text-center m-auto">Walk Title</label>
                    <input className="m-auto w-2/4" placeholder="walk title" {...register("name", { required: true })} />
                    {errors.name && <p className="m-auto w-2/4 p-3">This field is required</p>}
                    <br></br>
                    <label className="bg-slate-500 rounded-md h-10 py-2 w-1/4 text-center m-auto">Walk City</label>
                    <input className="m-auto w-2/4" placeholder="walk city" {...register("city", { required: true })} />
                    {errors.city && <p className="m-auto w-2/4 p-3">This field is required</p>}
                    <br></br>
                    <label className="bg-slate-500 rounded-md h-10 py-2 w-1/4 text-center m-auto">Walk Length (in km):</label>
                    <input type="number" className="m-auto w-2/4" placeholder="length" {...register("length", { required: true })} />
                    {errors.length && <p className="m-auto w-2/4 p-3">This field is required</p>}
                    <label className="bg-slate-500 rounded-md h-10 py-2 w-1/4 text-center m-auto">Walk Description:</label>
                    <textarea className="m-auto w-2/4 p-3" placeholder="Description" {...register("description", { required: true })} />
                    {errors.description && <p className="m-auto w-2/4 p-3">This field is required</p>}
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-1/2 m-auto" type="submit" />
                </form>
            </div>
            
        </>
    )
}