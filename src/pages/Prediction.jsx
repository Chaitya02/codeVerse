import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { postPredicationInput } from "../api/model";
import { useNavigate } from "react-router-dom";

const Prediction = () => {
  const [formdata, setFormData] = useState({
    userFollowerCount: 0,
    userFollowingCount: 0,
    userBiographyLength: "",
    userMediaCount: 0,
    userHasProfilPic: 0,
    userIsPrivate: 0,
    usernameLength: "",
  });

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(postPredicationInput, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      mutate(formdata);
    },
    [formdata]
  );

  return (
    <div className="h-full p-10 mx-auto flex justify-between items-center bg-gray-500">
      <div className="w-[60%] mx-auto">
        <div className="rounded-lg p-2">
          <form onSubmit={onSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="usernameLength"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="usernameLength"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="usernameDigitCount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Account name
                </label>
                <input
                  type="text"
                  id="usernameDigitCount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="userFollowerCount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Follower count
                </label>
                <input
                  type="number"
                  id="userFollowerCount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.id]: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="userMediaCount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No of uploaded media by user
                </label>
                <input
                  type="number"
                  id="userMediaCount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.id]: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="userFollowingCount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Following count
              </label>
              <input
                type="number"
                id="userFollowingCount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.id]: parseInt(e.target.value),
                  }))
                }
              />
            </div>
            <div className="mb-7">
              <label
                for="userBiographyLength"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User account biography
              </label>
              <textarea
                id="userBiographyLength"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write biography here...."
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              ></textarea>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <div className="flex items-center mb-4">
                  <input
                    id="userIsPrivate"
                    type="radio"
                    value={
                      1 -
                      (formdata["userIsPrivate"]
                        ? formdata["userIsPrivate"]
                        : 0)
                    }
                    name="userIsPrivate"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }))
                    }
                  />
                  <label
                    for="userIsPrivate"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Is the account a private account .
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <div className="flex items-center mb-4">
                  <input
                    id="userHasProfilPic"
                    type="radio"
                    value={
                      1 -
                      (formdata["userHasProfilPic"]
                        ? formdata["userHasProfilPic"]
                        : 0)
                    }
                    name="userHasProfilPic"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }))
                    }
                  />
                  <label
                    for="userHasProfilPic"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Does profile have profile image?
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
