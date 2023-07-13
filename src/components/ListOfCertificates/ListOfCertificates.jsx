import "./ListOfCertificates.css";
import { CertificateCard } from "./CertificateCard/CertificateCard";
import "./ListOfCertificates.css";
import desarrolloWebThumbnail from "../../assets/certificates/desarrolloWeb-certificado.png";
import javaScriptThumbnail from "../../assets/certificates/javaScript-certificado.png";
import reactJsThumbnail from "../../assets/certificates/reactJs-certificado.png";
import programacionBackendThumbnail from "../../assets/certificates/programacionBackendo-certificado.png";
import responsiveWebDesignThumbnail from "../../assets/certificates/responsiveWebDesign-certificado.png";
import typescriptThumbnail from "../../assets/certificates/typescript-certificado.jpg";
import gitThumbnail from "../../assets/certificates/git-certificado.jpg";
import githubThumbnail from "../../assets/certificates/github-certificado.jpg";

export function ListOfCertificates() {
  return (
    <div className="ListOfCertificates">
      <CertificateCard
        img={programacionBackendThumbnail}
        title="Programación Backend"
        institution="Coderhouse"
        link="https://www.coderhouse.com/certificados/645c2e14ed7862000252cbf0"
      />
      <CertificateCard
        img={reactJsThumbnail}
        title="React Js"
        institution="Coderhouse"
        link="https://www.coderhouse.com/certificados/6229f7bd7739570026129477"
      />
      <CertificateCard
        img={javaScriptThumbnail}
        title="JavaScript"
        institution="Coderhouse"
        link="https://www.coderhouse.com/certificados/618d468009ffc4002780b7e2"
      />
      <CertificateCard
        img={desarrolloWebThumbnail}
        title="Desarrollo Web"
        institution="Coderhouse"
        link="https://www.coderhouse.com/certificados/6127a51e1d7e170010f51ce9"
      />
      <CertificateCard
        img={responsiveWebDesignThumbnail}
        title="Responsive Web Design"
        institution="freeCodeCamp"
        link="https://www.freecodecamp.org/espanol/certification/LeandroDoliri/responsive-web-design"
      />
      <CertificateCard
        img={typescriptThumbnail}
        title="TypeScript"
        institution="CódigoFacilito"
        link="https://codigofacilito.com/usuarios/leandoliri"
      />
      <CertificateCard
        img={gitThumbnail}
        title="Git"
        institution="CódigoFacilito"
        link="https://codigofacilito.com/usuarios/leandoliri"
      />
      <CertificateCard
        img={githubThumbnail}
        title="Github"
        institution="CódigoFacilito"
        link="https://codigofacilito.com/usuarios/leandoliri"
      />
    </div>
  );
}
