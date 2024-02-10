import './Skills.css'
import rt from '../../assets/images/react.png';
import C from '../../assets/images/c.png';
import Cpp from '../../assets/images/cpp.png';
import rust from '../../assets/images/rust.png';
import java from '../../assets/images/java.png';
import CSharp from '../../assets/images/cs.png';
import py from '../../assets/images/python.png';
import sql from '../../assets/images/sql.png';
import linux from '../../assets/images/linux.png';
import gitlab from '../../assets/images/gitlab.png';
import jenkins from '../../assets/images/jenkins.png'; 
import docker from '../../assets/images/docker.png';
import kube from '../../assets/images/kubernetes.png';
import terraform from '../../assets/images/terraform.png';
import node from '../../assets/images/inodejs.png';
import Ocaml from '../../assets/images/Ocaml.png';
import scala from '../../assets/images/scala.png';
import figma from '../../assets/images/figma.png';
import Unity from '../../assets/images/unity.png';
import gns3 from '../../assets/images/gns3.png';
import ts from '../../assets/images/typescript.png';
import vim from '../../assets/images/vim.png';
import sass from '../../assets/images/Sass.png';
import go from '../../assets/images/go.png';
import svelte from '../../assets/images/svelte.png';
import angular from '../../assets/images/angular.png';
import aws from '../../assets/images/aws.png';
import azure from '../../assets/images/azure.png';
import ggcloud from '../../assets/images/ggcloud.png';
import ibmc from '../../assets/images/ibmc.png';
import vmware from '../../assets/images/vmware.png';
import vbox from '../../assets/images/virtualbox.png';
import kvm from '../../assets/images/kvm.png';
import proxmox from '../../assets/images/proxmox.png';
import wireshark from '../../assets/images/wireshark.png';
import apache from '../../assets/images/apache.png';
import rootme from '../../assets/images/rootme.png';
import htb from '../../assets/images/hack.png';
import thm from '../../assets/images/tryhackme.png';
import vuln from '../../assets/images/vulhub.png';

function Skill({image, text}) {
  return (
    <div className="skill">
    <img src={image} alt={text} />
    <span>{text}</span>
  </div>
  );
}

function Skills() {
    return (
        <div className="skills-page">
          <p className="quote">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
          <h1>Technical Skills</h1>
          <p className="intro">
            The main area of expertise is cybersecurity/low level development and devsecops but I'am also a fullstack developer.
            All of the following programming languages and Technologies have been use and implemented successfully in complex project
            either at Epita computer science school or at work.
          </p>
          <div className="skills-grid">
            <Skill image={C} text="C"/>
            <Skill image={Cpp} text="C++"/>
            <Skill image={rust} text="Rust"/>
            <Skill image={go} text="Go"/>
            <Skill image={java} text="Java"/>
            <Skill image={CSharp} text="C#"/>
            <Skill image={py} text="Python"/>
            <Skill image={rt} text="React"/>
            <Skill image={node} text="Nodejs & core js"/>
            <Skill image={ts} text="Typescript"/>
            <Skill image={sass} text="Sass"/>
            <Skill image={angular} text="Angular"/>
            <Skill image={Ocaml} text="Ocaml"/>
            <Skill image={scala} text="Scala"/>
            <Skill image={sql} text="SQL"/>
            <Skill image={gitlab} text="Gitlab CI/CD"/>
            <Skill image={jenkins} text="jenkins CI/CD"/>
            <Skill image={apache} text="Apache web server"/>
            <Skill image={vim} text="Vim"/>
            <Skill image={figma} text="Figma"/>
            <Skill image={Unity} text="Unity"/>
            <Skill image={svelte} text="Svelte"/>
          </div>
          <h1>Cybersecurity</h1>
          <p className='intro'>As a cybersecurity engineer, I have skills in malware analysis, reverse engineering, forensic, OSINT, pentesting and networking.
            As a hoby I am always challenging my skills with various machine on try hack me, rootme, vulnhub or hackthebox. For more information about my cybersecurity project have a look
            to my project page. Cybersecurity is a priority for me and I all my development are secure by design.
          </p>
          <div className='skills-grid'>
            <Skill image={linux} text="Linux sys admin"/>
            <Skill image={gns3} text="gns3 / Packet Tracer"/>
            <Skill image={wireshark} text="Wireshark"/>
            <Skill image={rootme} text="Rootme"/>
            <Skill image={htb} text="Hack the Box"/>
            <Skill image={thm} text="Try Hack me"/>
            <Skill image={vuln} text="Vulnhub"/>
          </div>
          <h1>Cloud computing</h1>
          <p className='intro'>As cloud computing is more and more in demand, I have used the following to test, deploy project or for educational purpose cloud providers.</p>
          <div className='skills-grid'>
            <Skill image={aws} text="AWS"/>
            <Skill image={azure} text="Microsoft Azure"/>
            <Skill image={ggcloud} text="Google Cloud"/>
            <Skill image={ibmc} text="IBM Cloud"/>
            <Skill image={terraform} text="Terraform"/>
          </div>
          <h1>Virtualization & Containerization</h1>
          <p className='intro'>Virtualization is more and more used accross distributed system. Either on personal computer to test OS or in
            cloud computing through various technologies, everyone wants to virtualize processes or make it run inside a container. Virtulization or containerization is the deal for new project.
            It's a matter of security, isolation and managment of resources.</p>
          <div className='skills-grid'>
            <Skill image={docker} text="Docker"/>
            <Skill image={kube} text="Kubernetes"/>
            <Skill image={vmware} text="vmware"/>
            <Skill image={vbox} text="Virtualbox"/>
            <Skill image={kvm} text="KVM"/>
            <Skill image={proxmox} text="proxmox"/>
          </div>
        </div>
    );
}

export default Skills;