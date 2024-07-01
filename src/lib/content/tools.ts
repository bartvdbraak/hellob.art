import gitHubLogo from '$lib/assets/tools/github.svg';
import overleafLogo from '$lib/assets/tools/overleaf.svg';
import argoCDLogo from '$lib/assets/tools/argocd.svg';
import studio3TLogo from '$lib/assets/tools/studio3t.svg';
import warpLogo from '$lib/assets/tools/warp.svg';
import k9sLogo from '$lib/assets/tools/k9s.png';
import tablePlusLogo from '$lib/assets/tools/table-plus.png';
import figmaLogo from '$lib/assets/tools/figma.svg';
import azureCLILogo from '$lib/assets/tools/azure-cli.svg';
import keystoreExplorer from '$lib/assets/tools/keystore-exporer.png';
import togglTrackLogo from '$lib/assets/tools/toggl-track.svg';
import helmLogo from '$lib/assets/tools/helm.svg';
import royalTSXLogo from '$lib/assets/tools/royal-tsx.png';
import poetryLogo from '$lib/assets/tools/poetry.svg';
import maccyLogo from '$lib/assets/tools/maccy.png';
import balenaEtcherLogo from '$lib/assets/tools/balena-etcher.svg';
import sendGridLogo from '$lib/assets/tools/sendgrid.svg';
import insomniaLogo from '$lib/assets/tools/insomnia.svg';
import blenderLogo from '$lib/assets/tools/blender.svg';
import bitwardenLogo from '$lib/assets/tools/bitwarden.svg';
import azureDataStudioLogo from '$lib/assets/tools/azure-data-studio.png';
import wiresharkLogo from '$lib/assets/tools/wireshark.png';
import rectangleLogo from '$lib/assets/tools/rectangle.png';
import pyCharmLogo from '$lib/assets/tools/pycharm.svg';
import dockerLogo from '$lib/assets/tools/docker.webp';
import cyberduckLogo from '$lib/assets/tools/cyberduck.png';
import mullvadVPNLogo from '$lib/assets/tools/mullvad-vpn.svg';
import jqLogo from '$lib/assets/tools/jq.svg';
import akamaiLogo from '$lib/assets/tools/akamai.svg';
import cloudFlareLogo from '$lib/assets/tools/cloudflare.svg';
import visualStudioCodeLogo from '$lib/assets/tools/visual-studio-code.svg';
import opsGenieLogo from '$lib/assets/tools/opsgenie.svg';
import vimLogo from '$lib/assets/tools/vim.svg';
import notionLogo from '$lib/assets/tools/notion.svg';
import nvmLogo from '$lib/assets/tools/nvm.svg';
import gIMPLogo from '$lib/assets/tools/gimp.svg';
import azureStorageExplorerLogo from '$lib/assets/tools/azure-storage-explorer.svg';
import meldLogo from '$lib/assets/tools/meld.svg';
import karabinerElementsLogo from '$lib/assets/tools/karabiner-elements.png';
import kustomizeLogo from '$lib/assets/tools/kustomize.svg';
import inkScapeLogo from '$lib/assets/tools/inkscape.svg';
import oBSLogo from '$lib/assets/tools/obs.svg';
import wireGuardLogo from '$lib/assets/tools/wireguard.svg';
import switchHostsLogo from '$lib/assets/tools/switchhosts.svg';
import slackLogo from '$lib/assets/tools/slack.svg';
import nmapLogo from '$lib/assets/tools/nmap.svg';
import dBeaverLogo from '$lib/assets/tools/dbeaver.svg';
import openTofuLogo from '$lib/assets/tools/opentofu.svg';
import terraformLogo from '$lib/assets/tools/terraform.svg';
import gitLensLogo from '$lib/assets/tools/gitlens.png';

export {
	gitHubLogo,
	overleafLogo,
	argoCDLogo,
	studio3TLogo,
	warpLogo,
	k9sLogo,
	figmaLogo,
	azureCLILogo,
	keystoreExplorer,
	togglTrackLogo,
	helmLogo,
	royalTSXLogo,
	poetryLogo,
	maccyLogo,
	balenaEtcherLogo,
	sendGridLogo,
	insomniaLogo,
	blenderLogo,
	bitwardenLogo,
	azureDataStudioLogo,
	rectangleLogo,
	pyCharmLogo,
	dockerLogo,
	cyberduckLogo,
	mullvadVPNLogo,
	jqLogo,
	akamaiLogo,
	cloudFlareLogo,
	visualStudioCodeLogo,
	opsGenieLogo,
	vimLogo,
	notionLogo,
	nvmLogo,
	gIMPLogo,
	azureStorageExplorerLogo,
	meldLogo,
	karabinerElementsLogo,
	kustomizeLogo,
	inkScapeLogo,
	oBSLogo,
	wireGuardLogo,
	switchHostsLogo,
	wiresharkLogo,
	slackLogo,
	nmapLogo,
	dBeaverLogo,
	openTofuLogo,
	gitLensLogo
};

export type Tool = {
	name: string;
	tagLine: string;
	description: string;
	logo: string;
	url: string;
};

const tools: Tool[] = [
	{
		name: 'GitHub',
		tagLine: 'A complete developer platform',
		description:
			'A platform for hosting and collaborating on code, providing version control, issue tracking, and code review.',
		logo: gitHubLogo,
		url: 'https://github.com'
	},
	{
		name: 'Overleaf',
		tagLine: 'Online LaTeX Editor',
		description:
			'Overleaf provides a collaborative environment for writing and publishing LaTeX documents. I use it for crafting scientific papers, technical documents, and more.',
		logo: overleafLogo,
		url: 'https://www.overleaf.com'
	},
	{
		name: 'ArgoCD',
		tagLine: 'Declarative GitOps Continuous Delivery',
		description:
			'ArgoCD is vital for deploying applications in a declarative way, using Git as the source of truth. It helps me to manage and automate deployments across different environments.',
		logo: argoCDLogo,
		url: 'https://argoproj.github.io/cd/'
	},
	{
		name: 'Studio 3T',
		tagLine: 'MongoDB Development Tool',
		description:
			'Studio 3T simplifies working with MongoDB, providing useful features for managing databases, collections, and queries.',
		logo: studio3TLogo,
		url: 'https://www.studio3t.com'
	},
	{
		name: 'Warp',
		tagLine: 'Fast Terminal',
		description:
			'Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.',
		logo: warpLogo,
		url: 'https://warp.dev'
	},
	{
		name: 'TablePlus',
		tagLine: 'Modern & Native Database client',
		description:
			'TablePlus is a contemporary, native application featuring a sophisticated user interface to efficiently oversee multiple databases concurrently.',
		logo: tablePlusLogo,
		url: 'https://tableplus.com/'
	},
	{
		name: 'k9s',
		tagLine: 'Kubernetes Terminal',
		description:
			'k9s is a Kubernetes terminal that provides an easy interface to interact with clusters, aiding in managing and observing Kubernetes resources.',
		logo: k9sLogo,
		url: 'https://k9scli.io'
	},
	{
		name: 'Figma',
		tagLine: 'Collaborative Design Tool',
		description:
			'Figma is a collaborative design tool that helps in creating, testing, and sharing user interfaces for applications and websites.',
		logo: figmaLogo,
		url: 'https://www.figma.com'
	},
	{
		name: 'Azure CLI',
		tagLine: 'Command-line Interface for Azure',
		description:
			'Azure CLI is a command-line interface for managing Azure resources, enabling quick administration of my Azure-hosted applications and services.',
		logo: azureCLILogo,
		url: 'https://docs.microsoft.com/cli/azure'
	},
	{
		name: 'KeyStore Explorer',
		tagLine: 'GUI-based Key & Certificate Management Tool',
		description:
			'KeyStore Explorer is a GUI-based tool to manage cryptographic keys and certificates, helping in development and testing phases.',
		logo: keystoreExplorer,
		url: 'https://keystore-explorer.org'
	},
	{
		name: 'Toggl Track',
		tagLine: 'Time Tracking Tool',
		description:
			'Toggl Track is a time tracking tool that assists in managing my daily tasks and tracking productivity.',
		logo: togglTrackLogo,
		url: 'https://www.toggl.com/track'
	},
	{
		name: 'Helm',
		tagLine: 'Kubernetes Package Manager',
		description:
			'Helm is a Kubernetes package manager that simplifies the deployment and management of applications on Kubernetes clusters.',
		logo: helmLogo,
		url: 'https://helm.sh'
	},
	{
		name: 'Royal TSX',
		tagLine: 'Connection Management Tool',
		description:
			'Royal TSX is a connection management tool that provides easy and secure access to remote systems.',
		logo: royalTSXLogo,
		url: 'https://www.royalapps.com/ts/mac/features'
	},
	{
		name: 'Poetry',
		tagLine: 'Python Dependency Management Tool',
		description:
			'Poetry is a Python dependency management tool that simplifies package management and project environment setup.',
		logo: poetryLogo,
		url: 'https://python-poetry.org'
	},
	{
		name: 'Maccy',
		tagLine: 'Clipboard Manager for macOS',
		description:
			'Maccy is a lightweight clipboard manager for macOS that improves productivity by keeping a history of the clipboard.',
		logo: maccyLogo,
		url: 'https://maccy.app'
	},
	{
		name: 'Balena Etcher',
		tagLine: 'USB and SD Card Writing Tool',
		description:
			'Balena Etcher is a USB and SD card writing tool used to flash OS images onto memory cards or drives.',
		logo: balenaEtcherLogo,
		url: 'https://www.balena.io/etcher'
	},
	{
		name: 'SendGrid',
		tagLine: 'Email Delivery Service',
		description:
			'SendGrid is an email delivery service that facilitates the sending of transactional or marketing emails.',
		logo: sendGridLogo,
		url: 'https://sendgrid.com'
	},
	{
		name: 'Insomnia',
		tagLine: 'REST Client',
		description:
			'Insomnia is a powerful REST client that aids in testing, debugging, and interacting with HTTP APIs.',
		logo: insomniaLogo,
		url: 'https://insomnia.rest'
	},
	{
		name: 'Blender',
		tagLine: '3D Modeling and Animation Software',
		description:
			'Blender is a 3D modeling and animation software used for creating and rendering 3D graphics and animations.',
		logo: blenderLogo,
		url: 'https://www.blender.org'
	},
	{
		name: 'Bitwarden',
		tagLine: 'Open-source Password Manager',
		description:
			'Bitwarden is an open-source password manager that securely stores and manages passwords across devices.',
		logo: bitwardenLogo,
		url: 'https://bitwarden.com'
	},
	{
		name: 'Azure Data Studio',
		tagLine: 'Cross-platform Database Tool',
		description:
			'Azure Data Studio is a cross-platform database tool that provides a modern editor experience for managing data across multiple sources.',
		logo: azureDataStudioLogo,
		url: 'https://azure.microsoft.com/products/data-studio'
	},
	{
		name: 'Wireshark',
		tagLine: 'Network Protocol Analyzer',
		description:
			'Wireshark is a network protocol analyzer that helps me inspect and troubleshoot network traffic, providing in-depth insights.',
		logo: wiresharkLogo,
		url: 'https://www.wireshark.org'
	},
	{
		name: 'Rectangle',
		tagLine: 'Window Management Tool for macOS',
		description:
			'Rectangle is a window management tool for macOS that provides keyboard shortcuts for resizing and organizing windows efficiently.',
		logo: rectangleLogo,
		url: 'https://rectangleapp.com/'
	},
	{
		name: 'PyCharm',
		tagLine: 'Integrated Development Environment for Python',
		description:
			'An Integrated Development Environment (IDE) for Python, providing intelligent code assistance and debugging tools.',
		logo: pyCharmLogo,
		url: 'https://www.jetbrains.com/pycharm/'
	},
	{
		name: 'Docker',
		tagLine: 'Containerization Platform',
		description:
			'A platform that enables the development, shipment, and running of applications inside containers, ensuring consistency across environments.',
		logo: dockerLogo,
		url: 'https://www.docker.com'
	},
	{
		name: 'Cyberduck',
		tagLine: 'Server and Cloud Storage Browser',
		description:
			'A libre server and cloud storage browser for Mac and Windows, supporting various protocols and cloud providers.',
		logo: cyberduckLogo,
		url: 'https://cyberduck.io'
	},
	{
		name: 'Mullvad VPN',
		tagLine: 'VPN Service',
		description:
			'A VPN service that prioritizes privacy and anonymity, keeping my online activities secure and private.',
		logo: mullvadVPNLogo,
		url: 'https://mullvad.net'
	},
	{
		name: 'jq',
		tagLine: 'Command-line JSON Processor',
		description:
			'A lightweight and flexible command-line JSON processor, essential for parsing and manipulating JSON data in the shell.',
		logo: jqLogo,
		url: 'https://stedolan.github.io/jq/'
	},
	{
		name: 'Akamai',
		tagLine: 'Global Content Delivery Network',
		description:
			'A global content delivery network, cybersecurity, and cloud service company, providing web and internet security services.',
		logo: akamaiLogo,
		url: 'https://www.akamai.com'
	},
	{
		name: 'CloudFlare',
		tagLine: 'Content Delivery Network and Security Services',
		description:
			'A company that offers CDN services, DDoS mitigation, and distributed domain name server services to optimize and secure online content.',
		logo: cloudFlareLogo,
		url: 'https://www.cloudflare.com'
	},
	{
		name: 'Visual Studio Code',
		tagLine: 'Code Editor',
		description:
			'A free, open-source code editor that offers powerful tools for code development, debugging, and extensions for various programming languages.',
		logo: visualStudioCodeLogo,
		url: 'https://code.visualstudio.com'
	},
	{
		name: 'OpsGenie',
		tagLine: 'Alert and On-Call Management Platform',
		description:
			'An alert and on-call management platform that ensures critical alerts are never missed, improving incident response times.',
		logo: opsGenieLogo,
		url: 'https://www.atlassian.com/software/opsgenie'
	},
	{
		name: 'vim',
		tagLine: 'Text Editor',
		description:
			'A highly configurable and efficient text editor that I use for editing code and text files from the command line.',
		logo: vimLogo,
		url: 'https://www.vim.org'
	},
	{
		name: 'Notion',
		tagLine: 'Collaboration Platform',
		description:
			'A collaboration platform that combines note-taking, task management, and workflow management.',
		logo: notionLogo,
		url: 'https://www.notion.so'
	},
	{
		name: 'nvm',
		tagLine: 'Node.js Version Manager',
		description:
			'A Node.js version manager that simplifies the installation and management of multiple Node.js versions.',
		logo: nvmLogo,
		url: 'https://github.com/nvm-sh/nvm'
	},
	{
		name: 'GIMP',
		tagLine: 'Open-source Graphics Editor',
		description:
			'An open-source raster graphics editor used for tasks such as photo retouching, image editing, and composition.',
		logo: gIMPLogo,
		url: 'https://www.gimp.org'
	},
	{
		name: 'Azure Storage Explorer',
		tagLine: 'Azure Storage Management Application',
		description: 'A standalone app that facilitates the management of Azure storage data.',
		logo: azureStorageExplorerLogo,
		url: 'https://azure.microsoft.com/products/storage/storage-explorer'
	},
	{
		name: 'Meld',
		tagLine: 'Visual Diff and Merge Tool',
		description:
			'A visual diff and merge tool that provides clear comparisons between files and directories.',
		logo: meldLogo,
		url: 'https://meldmerge.org'
	},
	{
		name: 'Karabiner Elements',
		tagLine: 'Keyboard Customizer for macOS',
		description:
			'A powerful keyboard customizer for macOS, providing multiple customization options for the keyboard.',
		logo: karabinerElementsLogo,
		url: 'https://karabiner-elements.pqrs.org'
	},
	{
		name: 'Kustomize',
		tagLine: 'Kubernetes Configuration Customizer',
		description:
			'A template-free way to customize application configuration that simplifies the customization of Kubernetes YAML configuration files.',
		logo: kustomizeLogo,
		url: 'https://kustomize.io'
	},
	{
		name: 'InkScape',
		tagLine: 'Open-source Vector Graphics Editor',
		description:
			'An open-source vector graphics editor, enabling the creation and editing of vector images.',
		logo: inkScapeLogo,
		url: 'https://inkscape.org'
	},
	{
		name: 'OBS',
		tagLine: 'Open Broadcaster Software',
		description:
			'Open Broadcaster Software, a free and open-source tool for video recording and live streaming.',
		logo: oBSLogo,
		url: 'https://obsproject.com'
	},
	{
		name: 'WireGuard',
		tagLine: 'Modern VPN Protocol',
		description:
			'A modern VPN protocol that aims for simplicity and speed, facilitating secure connections.',
		logo: wireGuardLogo,
		url: 'https://www.wireguard.com'
	},
	{
		name: 'SwitchHosts',
		tagLine: 'Hosts File Manager',
		description:
			'An App for managing and switching hosts files, allowing me to easily switch between different environments.',
		logo: switchHostsLogo,
		url: 'https://switchhosts.vercel.app/'
	},
	{
		name: 'Slack',
		tagLine: 'Collaboration Hub',
		description:
			'A collaboration hub that connects my work with the people I work with through channels, where communication and files are placed in one place.',
		logo: slackLogo,
		url: 'https://slack.com'
	},
	{
		name: 'nmap',
		tagLine: 'Network Security Scanner',
		description:
			'A security scanner used to discover hosts and services on a computer network, providing a detailed view of the network.',
		logo: nmapLogo,
		url: 'https://nmap.org'
	},
	{
		name: 'DBeaver',
		tagLine: 'Universal Database Tool',
		description:
			'A universal database tool for developers and database administrators that supports all popular databases.',
		logo: dBeaverLogo,
		url: 'https://dbeaver.io'
	},
	{
		name: 'OpenTofu',
		tagLine: 'Infrastructure as Code Tool',
		description:
			'An open-source infrastructure as code tool that enables the automated creation, modification, and versioning of complex infrastructures.',
		logo: openTofuLogo,
		url: 'https://opentofu.org'
	},
	{
		name: 'Terraform',
		tagLine: 'Infrastructure as Code Tool',
		description:
			'Terraform is infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.',
		logo: terraformLogo,
		url: 'https://opentofu.org'
	},
	{
		name: 'GitLens',
		tagLine: 'Git Extension for Visual Studio Code',
		description:
			'An extension for Visual Studio Code that supercharges the Git capabilities, providing advanced blame annotations, code lens, and more.',
		logo: gitLensLogo,
		url: 'https://gitlens.amod.io'
	}
];

export default tools;
