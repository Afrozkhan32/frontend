import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareButtons = ({ url, title, description }) => {
  return (
    <div className="flex gap-4 justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <FacebookShareButton url={url} quote={description}>
        <FacebookIcon
          size={48}
          round
          className="transition-transform transform hover:scale-110 hover:shadow-lg"
        />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={description}>
        <WhatsappIcon
          size={48}
          round
          className="transition-transform transform hover:scale-110 hover:shadow-lg"
        />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon
          size={48}
          round
          className="transition-transform transform hover:scale-110 hover:shadow-lg"
        />
      </TwitterShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon
          size={48}
          round
          className="transition-transform transform hover:scale-110 hover:shadow-lg"
        />
      </TelegramShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon
          size={48}
          round
          className="transition-transform transform hover:scale-110 hover:shadow-lg"
        />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
