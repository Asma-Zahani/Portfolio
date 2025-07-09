import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaTelegramPlane } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWarning } from "react-icons/ai";

export default function Contact() {
  const [alertContent, setAlertContent] = useState(null);
  const form = useRef();
  const timeInput = useRef();
  const showAlert = (type, message) => {setAlertContent({ type, message })};

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!formData.get("name")?.trim() || !formData.get("email")?.trim() || !formData.get("title")?.trim() || !formData.get("message")?.trim()) {
      showAlert("warning", "Veuillez remplir tous les champs avant d'envoyer le message.");
      return;
    }
    timeInput.current.value = (new Date().toLocaleString());

    emailjs.sendForm('service_portfolio', 'template_portfolio', form.current, 'lAjgV84qRncDk4OYi')
      .then(() => {
        showAlert("success", "Message envoyé avec succès !");
        form.current.reset();
      }, (error) => {
        showAlert("error", error.text);
      });
  };

  const getAlertIcon = () => {
    switch (alertContent?.type) {
      case "success": return <AiOutlineCheckCircle />;
      case "warning": return <AiOutlineWarning />;
      case "error": return <AiOutlineCloseCircle />;
      default: return null;
    }
  };

  const getAlertColor = () => {
    switch (alertContent?.type) {
      case "success": return "bg-green-500";
      case "warning": return "bg-yellow-500";
      case "error": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="title-section text-left text-sm-center">
          <h2>get in <span className="text-purpleLight">touch</span>
          </h2>
          <span className="title-bg">contact</span>
        </div>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p className="open-sans-font custom-span-contact position-relative">
                  <i className="position-absolute text-purpleLight"><FaEnvelopeOpen/></i>
                  <span className="d-block">mail me</span>zahaniasma@sousse.r-iset.tn
                </p>
                <p className="open-sans-font custom-span-contact position-relative">
                  <i className="position-absolute text-purpleLight"><FaPhoneSquareAlt/></i>
                  <span className="d-block">call me</span>+216 20 988 050 
                </p>
                {/* <ul className=" -ml-1 pt-1 mb-5 flex flex-row gap-3">
                  <li className={`w-[40px] h-[40px] rounded-full bg-bgLight dark:bg-bgDark hover:bg-purpleLight flex items-center justify-center relative`}>
                    <Link className="w-full h-full flex items-center justify-center relative group">
                      <i className={`text-md text-gray dark:text-white z-10 group-hover:text-white`}><FaFacebookF /></i>
                    </Link>
                  </li>
                  <li className={`w-[40px] h-[40px] rounded-full bg-bgLight dark:bg-bgDark hover:bg-purpleLight flex items-center justify-center relative`}>
                    <Link className="w-full h-full flex items-center justify-center relative group">
                      <i className={`text-md text-gray dark:text-white z-10 group-hover:text-white`}><FaTwitter /></i>
                    </Link>
                  </li>
                  <li className={`w-[40px] h-[40px] rounded-full bg-bgLight dark:bg-bgDark hover:bg-purpleLight flex items-center justify-center relative`}>
                    <Link className="w-full h-full flex items-center justify-center relative group">
                      <i className={`text-md text-gray dark:text-white z-10 group-hover:text-white`}><FaYoutube /></i>
                    </Link>
                  </li>
                </ul> */}
              </div>
              <div className="col-12 col-lg-8">
                <form ref={form} onSubmit={sendEmail} className="contactform">
                  <div className="contactform">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <input autocomplete="off" type="text" name="name" placeholder="YOUR NAME" />
                      </div>
                      <div className="col-12 col-md-4">
                        <input autocomplete="off" type="email" name="email" placeholder="YOUR EMAIL" />
                      </div>
                      <div className="col-12 col-md-4">
                        <input autocomplete="off" type="text" name="title" placeholder="YOUR SUBJECT" />
                      </div>
                      <input type="hidden" name="time" ref={timeInput} />
                      <div className="col-12">
                        <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                        <button className="button relative inline-flex items-center group">
                          <span className="relative z-[2] transition-all duration-300 ease-out text-gray dark:text-white group-hover:text-white">Send Message</span>
                          <span className="absolute right-[-1px] top-[-1px] bottom-0 w-[55px] h-[55px] flex items-center justify-center text-[19px] text-white bg-purpleLight rounded-full"><FaTelegramPlane/></span>
                        </button>
                      </div>
                      <div className="col-12 form-message">
                        <span className="output_message text-center font-weight-600 text-uppercase"></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alertContent && 
        <div className="fixed inset-0 z-40 bg-black/60"> 
          <div className="flex items-center justify-center w-full h-full">
            <div className={`relative w-[90%] max-w-sm p-6 bg-borderLight dark:bg-borderDark rounded-xl shadow-lg z-50`}>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="absolute -top-8 p-1 rounded-full dark:bg-borderDark bg-borderLight">
                  <div className={`${getAlertColor()} p-3 text-2xl rounded-full text-white`}>
                    {getAlertIcon()}
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <p className="text-lg uppercase dark:text-white">{alertContent.type === "success" ? "Succès" : alertContent.type === "warning" ? "Attention" : "Erreur"}</p>
                  <p className="text-sm p-1">{alertContent.message}</p>
                  <button onClick={() => setAlertContent(null)} className={`${getAlertColor()} w-full rounded-lg p-1 text-white mt-2`}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}