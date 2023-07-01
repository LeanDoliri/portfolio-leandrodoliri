import "./CertificateCard.css";

export function CertificateCard({
    img,
    title,
    institution,
    link,
  }) {
    return (
      <a href={link} target="_blank">
        <div className="CertificateCard">
          <div>         
            <img src={img} alt={title} className="CertificateCard-thumbnail" />
          </div>
          <p className="CertificateCard-title">{title}</p>
          <p className="CertificateCard-description">{institution}</p>
        </div>
      </a>
    );
  }