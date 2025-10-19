"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

interface FormProps {
  email: string;
}

const Form = (props: FormProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    school: "",
    graduationYear: "",
    dietRestrictions: "",
    hackathonsAttended: "",
    hearAboutUs: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Github: "",
    LinkedIn: "",
    portfolioWebsite: "",
  });

  // Form validation function
  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "school",
      "graduationYear",
      "hackathonsAttended",
      "hearAboutUs",
      "Q1",
      "Q2",
      "Q3",
    ];

    for (const field of requiredFields) {
      if (
        !formData[field as keyof typeof formData] ||
        formData[field as keyof typeof formData].toString().trim() === ""
      ) {
        toast.error(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return false;
      }
    }

    const validHearAboutUs = [
      "Instagram",
      "Friends",
      "School",
      "Discord",
      "Other",
    ];
    if (!validHearAboutUs.includes(formData.hearAboutUs)) {
      toast.error("Please select how you heard about us");
      return false;
    }

    // Validate numbers
    if (
      isNaN(Number(formData.graduationYear)) ||
      Number(formData.graduationYear) < 2020 ||
      Number(formData.graduationYear) > 2030
    ) {
      toast.error("Please enter a valid graduation year (2020-2030)");
      return false;
    }

    if (
      isNaN(Number(formData.hackathonsAttended)) ||
      Number(formData.hackathonsAttended) < 0
    ) {
      toast.error("Please enter a valid number of hackathons attended");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Form data submitted:", formData);
    console.log("Email:", email);

    try {
      await axios.post("/api/dashboard/formSubmission", formData);
      toast.success("Application submitted successfully!");
    } catch {
      toast.error("Error submitting application");
    }
    window.location.reload()
  };
  const editProfile = async () => {
    try {
      const res = await axios.patch("/api/dashboard/formSubmission");
      toast.success("You can now edit your application!");
      console.log("hjhjhkjj", res.data.data);
      setFormData(res.data.data);
      window.location.reload();
    } catch {}
  };
  const getRole = async () => {
    const res = await axios.get("/api/dashboard/formSubmission");
    setEmail(res.data.user.email);
    setRole(res.data.user.role);
    setId(res.data.user._id);
  };

  const handleAcceptedRSVP = async () => {
    console.log(id)
    await axios.post("/api/admin", { status:"confirmed", id:id});
    window.location.reload()
  };

  useEffect(() => {
    getRole();
  }, []);

  useEffect(() => {
    console.log(role);
    if (props.email) {
      setFormData((prev) => ({ ...prev, email: props.email }));
      setEmail(props.email);
    }
  }, [role, props.email]);

  return (
    <div className="w-full justify-center mx-10">
      <Toaster />
      {role=="incomplete" ? (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <label className="text-left text-2xl font-semibold mb-2">
            Basic Information
          </label>
          <div className="flex flex-row gap-5">
            <input
              name="firstName"
              value={formData?.firstName || ""}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full bg-white text-black my-2 p-2"
              placeholder="First Name *"
              required
            ></input>
            <input
              name="lastName"
              value={formData?.lastName || ""}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full bg-white text-black my-2 p-2"
              placeholder="Last Name *"
              required
            ></input>
          </div>

          <input
            name="phone"
            value={formData?.phone || ""}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="Phone Number *"
            required
          ></input>
          <input
            name="school"
            value={formData?.school || ""}
            onChange={(e) =>
              setFormData({ ...formData, school: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="School *"
            required
          ></input>
          <input
            name="graduationYear"
            type="number"
            min="2020"
            max="2030"
            value={formData?.graduationYear || ""}
            onChange={(e) =>
              setFormData({ ...formData, graduationYear: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="Graduation Year *"
            required
          ></input>
          <input
            name="dietRestrictions"
            value={formData?.dietRestrictions || ""}
            onChange={(e) =>
              setFormData({ ...formData, dietRestrictions: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="Dietary Restrictions (if any)"
          ></input>

          <input
            name="hackathonsAttended"
            type="number"
            min="0"
            value={formData?.hackathonsAttended || ""}
            onChange={(e) =>
              setFormData({ ...formData, hackathonsAttended: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="Number of Hackathons Attended *"
            required
          ></input>

          <select
            name="hearAboutUs"
            value={formData?.hearAboutUs || ""}
            onChange={(e) =>
              setFormData({ ...formData, hearAboutUs: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            required
          >
            <option value="">How did you hear about us? *</option>
            <option value="Instagram">Instagram</option>
            <option value="Friends">Friends</option>
            <option value="School">School</option>
            <option value="Discord">Discord</option>
            <option value="Other">Other</option>
          </select>

          <h1 className="text-left text-2xl font-semibold my-5">
            Long Answer Questions
          </h1>
          <h3 className="text-left text-xl font-semibold my-2">
            1. Describe an algorithm or computational approach that fascinates
            you. What makes it interesting, and how might you explore or build
            upon it during the hackathon? (300 words or less) *
          </h3>
          <textarea
            name="Q1"
            value={formData?.Q1 || ""}
            onChange={(e) => setFormData({ ...formData, Q1: e.target.value })}
            className="w-full bg-white text-black my-2 p-2 h-32"
            placeholder="Your answer *"
            required
          ></textarea>
          <h3 className="text-left text-xl font-semibold my-2">
            2. Tell us about a project you{"'"}ve worked on that you{"'"}re
            proud of. What challenges did you face and how did you overcome
            them? (300 words or less) *
          </h3>
          <textarea
            name="Q2"
            value={formData?.Q2 || ""}
            onChange={(e) => setFormData({ ...formData, Q2: e.target.value })}
            className="w-full bg-white text-black my-2 p-2 h-32"
            placeholder="Your answer *"
            required
          ></textarea>
          <h3 className="text-left text-xl font-semibold my-2">
            3. What do you hope to learn or accomplish at RythmHacks? How do you
            plan to make the most of the experience? (300 words or less) *
          </h3>
          <textarea
            name="Q3"
            value={formData?.Q3 || ""}
            onChange={(e) => setFormData({ ...formData, Q3: e.target.value })}
            className="w-full bg-white text-black my-2 p-2 h-32"
            placeholder="Your answer *"
            required
          ></textarea>

          <h1 className="text-left text-2xl font-semibold my-5">
            Optional Links
          </h1>
          <input
            name="Github"
            value={formData?.Github || ""}
            onChange={(e) =>
              setFormData({ ...formData, Github: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="GitHub"
          ></input>
          <input
            name="LinkedIn"
            value={formData?.LinkedIn || ""}
            onChange={(e) =>
              setFormData({ ...formData, LinkedIn: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="LinkedIn"
          ></input>
          <input
            name="portfolioWebsite"
            value={formData?.portfolioWebsite || ""}
            onChange={(e) =>
              setFormData({ ...formData, portfolioWebsite: e.target.value })
            }
            className="w-full bg-white text-black my-2 p-2"
            placeholder="Portfolio Website"
          ></input>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            Submit Application
          </button>
        </form>
      ) : role=="pending" ? (
        <div className="flex flex-col items-center justify-center min-h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 shadow-2xl border border-gray-700">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-green-400/20">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-green-400/30 animate-ping"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              🎉 Application Submitted!
            </h1>
            <div className="max-w-md">
              <p className="text-xl text-gray-300 mb-4">
                Thank you for applying to{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  RythmHacks 2025
                </span>
                !
              </p>
              <p className="text-gray-400 leading-relaxed">
                We&apos;ve received your application and will review it
                carefully. You&apos;ll hear back from us soon!
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl px-6 py-3 mb-8 backdrop-blur-sm">
            <p className="text-blue-300 font-medium">
              📋 Status:{" "}
              <span className="font-bold text-white">Under Review</span>
            </p>
          </div>

          {/* Edit Application Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 w-full max-w-md border border-gray-600/50 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Need to make changes?
              </h3>
              <p className="text-gray-400 text-sm">
                You can edit your application until the deadline.
              </p>
            </div>
            <button
              className="w-full bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-md"
              onClick={editProfile}
            >
              <span className="flex items-center justify-center gap-2">
                ✏️ <span>Edit Application</span>
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Questions? Email us at{" "}
              <a
                href="mailto:rythmhacks@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              >
                rythmhacks@gmail.com
              </a>
            </p>
          </div>
        </div>
      ): role=="hacker" ? 
      <div className="flex flex-col col-1 justify-center">
        <div className="flex justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl px-6 py-3 mt-[-30px] mb-2 backdrop-blur-sm">
            <p className="text-blue-300 font-medium text-4xl p-3">
              📋 Status:{" "}
              <span className="font-bold text-white">Accepted</span>
            </p>
        </div>
        <p className="text-xl text-gray-300 mb-15">Click on the following button to RSVP:</p>

        <button
          onClick={handleAcceptedRSVP}
              className="bg-gradient-to-r from-pink-300 to-blue-400 font-bold text-white text-2xl p-4 rounded-2xl shadow-md 
              hover:from-pink-400 hover:to-blue-500 hover:-translate-y-0.5 
                        active:translate-y-0 transition-all duration-200 ease-in-out"
            >
          RSVP
        </button>

      </div> : role=="confirmed" ? 
      <div>
        <div className="text-center mb-8 flex justify-center flex-row items-center">
            <h1 className="text-4xl font-bold text-white mb-4">
            <div className="flex bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl px-6 py-3 mb-8 backdrop-blur-sm">
              <div className="mb-8 mt-8 mr-8 flex">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-green-400/20">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* Animated rings */}
                <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-green-400/30 animate-ping"></div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-blue-300 font-medium">
                📋 Status:{" "}
                <span className="font-bold text-white">Confirmed RSVP</span>
              </p>
            </div>
          </div>
            </h1>
            <div className="max-w-md">
            </div>
          </div>
      </div>:<div></div>}
    </div>
  );
};

export default Form;
