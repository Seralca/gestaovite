import './App.css';
import React from 'react';
import Logo from "./img/LOGO.png"


function App() {
  return (
    <div className="App">
      <img src={Logo} alt="SG - Sistema de Gestão" /> SG - Sistema de Gestão
      <h1> Sites </h1>
      <h2>
        <p>
          <a href="https://www.google.com">  <button>Google</button> </a>
          <a href="https://outlook.office365.com/mail/">  <button>Email Outlook 365</button> </a>
          <a href="https://correiosbrasil-my.sharepoint.com/personal/sergioaugusto_correios_com_br/_layouts/15/onedrive.aspx?view=1">  <button>OnDrive</button> </a>
          <a href="https://intranet.correios.com.br/spi?">  <button>Intranet</button> </a>
          <a href="https://www.correios.com.br/">  <button>Site Correios</button> </a>
        </p>
      </h2>
      <h3> Buscas </h3>
      <h4>
        <p>
          <a href="https://achei.correios.com.br/app/index.php?">  <button>Achei</button> </a>
          <a href="https://www.correios.com.br/acesso-a-informacao/servidores?">  <button>Empregados</button> </a>
          <a href="https://cas.correios.com.br/login?service=http://snu0027.correiosnet.int:8080/stmi/public/login">  <button>STMI</button> </a>
          <a href="https://cas.correios.com.br/login?service=https%3A%2F%2Fidautorizacao.correios.com.br%2FidAut%2Fsistemas%2Fpesquisar-sistemas-disp.jsf%3FnomeSistema%3DidAutorizacao">  <button>ID Correios</button> </a>
          <a href="https://srointranet.correios.com.br/">  <button>Rastreamento</button> </a>
        </p>
      </h4>
      <h5> Sistemas </h5>
      <h6>
        <p>
          <a href="https://sei.correios.com.br/sip/login.php?sigla_orgao_sistema=CORREIOS&sigla_sistema=SEI&infra_url=L3NlaS8=">  <button>SEI</button> </a>
          <a href="https://dwbi.correios.com.br/MicroStrategy/servlet/mstrWeb?">  <button>DW</button> </a>
          <a href="http://itsm.correiosnet.int:8080/arsys/shared/login.jsp?">  <button>HelpDesk</button> </a>
          <a href="https://univirtual.correios.com.br/?">  <button>Unicorreios</button> </a>
          <a href="https://rh24horas.correios.com.br/populis/seguranca/login-rh24-frame.do?">  <button>RH 24 horas</button> </a>
        </p>
      </h6>
      <h7>
        <p>
          <a href="http://intranetsistemassc/Req_Veiculos/FrameTransporte_spi.htm?">  <button>Requisição Veículos</button> </a>
          <a href="https://sroweb.correios.com.br/app/index.php?">  <button>SRO WEB</button> </a>
          <a href="http://erp/jde/servlet/com.jdedwards.runtime.virtual.LoginServlet?">  <button>ERP</button> </a>
          <a href="https://srp.correios.com.br/registrodeponto/login.jsf?">  <button>SRP</button> </a>
          <a href="https://app.correiosnet.int/cas/login?">  <button>SAPPP</button> </a>
        </p>
      </h7>
      <h8> Locker </h8>
      <h9>
        <p>
          <a href="https://admin.myboxit.com.br/login?">  <button>BOXIT</button> </a>
          <a href="https://correios-prod.d1bw2786opqfpc.amplifyapp.com/signIn?">  <button>QIRA</button> </a>
          <a href="https://io.cliqueretire.com.br/">  <button>CLIQUERETIRE</button> </a>
        </p>
      </h9>
   </div>    
  );
}

export default App;
