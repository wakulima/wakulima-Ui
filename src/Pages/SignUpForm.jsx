import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../components/slices/Authslice";
// import Select from 'react-select'
import NavBar from "../components/NavBar";

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    location: "",
    user_type: "",
    verification_status: "",
    password: "",
    password_confirmation: "",
  });

//   useEffect(() => {
//     if (user.email ) {
//       navigate("/");
//     }
//   }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
    if (auth.registerStatus !== "rejected" ) {
        navigate("/login");
      }
  };


const options = [
  { value: 'buyer', label: 'Buyer' ,},
  { value: 'farmer', label: 'Farmer' },
  { value: 'researcher', label: 'Researcher' }
]

  return (
    <div>
      <header>
        <NavBar/>
      </header>
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Register Here! </h1>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Full name"
                      onChange={(e) =>
                        setUser({ ...user, full_name: e.target.value })
                      }
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="phone"
                      name="phone"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Phone number"
                      onChange={(e) =>
                        setUser({ ...user, phone_number: e.target.value })
                      }
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Phone Number
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="location"
                      name="location"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Location"
                      onChange={(e) =>
                        setUser({ ...user, location: e.target.value })
                      }
                      required
                    />
                    <label
                      htmlFor="location"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Location
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      autoComplete="off"
                      id="usertype"
                      name="usertype"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="User type"                   
                      // options={options} 
                      onChange={(e) =>
                        setUser({ ...user, user_type:  e.target.value })
                      }
                      // required
                    >
                      <option value="farmer" >Farmer</option>
                      <option value="buyer" >Buyer</option>
                      <option value="researcher" >Researcher</option>
                    </select>
                    
                    {/* <label
                      htmlFor="usertype"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Type
                    </label> */}
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="status"
                      name="status"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Verification status"
                      onChange={(e) =>
                        setUser({ ...user, verification_status: e.target.value })
                      }
                    />
                    <label
                      htmlFor="status"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Verification status
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password_confirmation"
                      name="password_confirmation"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password confirmation"
                      onChange={(e) =>
                        setUser({ ...user, password_confirmation: e.target.value })
                      }
                      required
                    />

                    <label
                      htmlFor="password_confirmation"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password Confirmation
                    </label>
                  </div>
                  <div className="relative">
                    <button className="bg-green-500 text-white rounded-md px-2 py-1">
                    {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
                   
                    </button>
                   
                    <div className="relative">
                {auth.registerStatus === "rejected" ? "Email has already been taken" : null}
                </div>
               
                
                  </div>
                  <h3>Already have an account? <Link to="/login" className="text-green-600">Login</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </form>
    </div>
  );
}

export default SignUpForm;
