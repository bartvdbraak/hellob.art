import gitHubLogo from '$lib/assets/tools/github.svg';
import overleafLogo from '$lib/assets/tools/overleaf.svg';
import argoCDLogo from '$lib/assets/tools/argocd.svg';
import studio3TLogo from '$lib/assets/tools/studio3t.svg';
import warpLogo from '$lib/assets/tools/warp.svg';
import k9sLogo from '$lib/assets/tools/k9s.png?enhanced';
import figmaLogo from '$lib/assets/tools/figma.svg';
import azureCLILogo from '$lib/assets/tools/azure-cli.svg';
import keystoreExplorer from '$lib/assets/tools/keystore-exporer.png?enhanced';
import togglTrackLogo from '$lib/assets/tools/toggl-track.svg';
import helmLogo from '$lib/assets/tools/helm.svg';
import royalTSXLogo from '$lib/assets/tools/royal-tsx.png?enhanced';
import poetryLogo from '$lib/assets/tools/poetry.svg';
import maccyLogo from '$lib/assets/tools/maccy.png?enhanced';
import balenaEtcherLogo from '$lib/assets/tools/balena-etcher.svg';
import sendGridLogo from '$lib/assets/tools/sendgrid.svg';
import insomniaLogo from '$lib/assets/tools/insomnia.svg';
import blenderLogo from '$lib/assets/tools/blender.svg';
import bitwardenLogo from '$lib/assets/tools/bitwarden.svg';
import azureDataStudioLogo from '$lib/assets/tools/azure-data-studio.png?enhanced';
import wiresharkLogo from '$lib/assets/tools/wireshark.png?enhanced';
import rectangleLogo from '$lib/assets/tools/rectangle.png?enhanced';
import pyCharmLogo from '$lib/assets/tools/pycharm.svg';
import dockerLogo from '$lib/assets/tools/docker.webp?enhanced';
import cyberduckLogo from '$lib/assets/tools/cyberduck.png?enhanced';
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
import karabinerElementsLogo from '$lib/assets/tools/karabiner-elements.png?enhanced';
import kustomizeLogo from '$lib/assets/tools/kustomize.svg';
import inkScapeLogo from '$lib/assets/tools/inkscape.svg';
import oBSLogo from '$lib/assets/tools/obs.svg';
import wireGuardLogo from '$lib/assets/tools/wireguard.svg';
import switchHostsLogo from '$lib/assets/tools/switchhosts.svg';
import slackLogo from '$lib/assets/tools/slack.svg';
import nmapLogo from '$lib/assets/tools/nmap.svg';
import dBeaverLogo from '$lib/assets/tools/dbeaver.svg';
import openTofuLogo from '$lib/assets/tools/opentofu.svg';
import gitLensLogo from '$lib/assets/tools/gitlens.png?enhanced';

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

export interface Tool {
	name: string;
	title: string;
	description: string;
	logo: string;
	toolUrl: string;
	enhanced: boolean;
}

const tools: Tool[] = [
	{
		name: 'GitHub',
		title: 'A complete developer platform',
		description:
			'A platform for hosting and collaborating on code, providing version control, issue tracking, and code review.',
		logo: gitHubLogo,
		toolUrl: 'https://github.com',
		enhanced: false
	},
	{
		name: 'Overleaf',
		title: 'Online LaTeX Editor',
		description:
			'Overleaf provides a collaborative environment for writing and publishing LaTeX documents. I use it for crafting scientific papers, technical documents, and more.',
		logo: overleafLogo,
		toolUrl: 'https://www.overleaf.com',
		enhanced: false
	},
	{
		name: 'ArgoCD',
		title: 'Declarative GitOps Continuous Delivery',
		description:
			'ArgoCD is vital for deploying applications in a declarative way, using Git as the source of truth. It helps me to manage and automate deployments across different environments.',
		logo: argoCDLogo,
		toolUrl: 'https://argoproj.github.io/cd/',
		enhanced: false
	},
	{
		name: 'Studio 3T',
		title: 'MongoDB Development Tool',
		description:
			'Studio 3T simplifies working with MongoDB, providing useful features for managing databases, collections, and queries.',
		logo: studio3TLogo,
		toolUrl: 'https://www.studio3t.com',
		enhanced: false
	},
	{
		name: 'Warp',
		title: 'Fast and Secure VPN',
		description:
			'Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.',
		logo: warpLogo,
		toolUrl: 'https://warp.dev',
		enhanced: false
	},
	{
		name: 'k9s',
		title: 'Kubernetes Terminal',
		description:
			'k9s is a Kubernetes terminal that provides an easy interface to interact with clusters, aiding in managing and observing Kubernetes resources.',
		logo: k9sLogo,
		toolUrl: 'https://k9scli.io',
		enhanced: true
	},
	{
		name: 'Figma',
		title: 'Collaborative Design Tool',
		description:
			'Figma is a collaborative design tool that helps in creating, testing, and sharing user interfaces for applications and websites.',
		logo: figmaLogo,
		toolUrl: 'https://www.figma.com',
		enhanced: false
	},
	{
		name: 'Azure CLI',
		title: 'Command-line Interface for Azure',
		description:
			'Azure CLI is a command-line interface for managing Azure resources, enabling quick administration of my Azure-hosted applications and services.',
		logo: azureCLILogo,
		toolUrl: 'https://docs.microsoft.com/cli/azure',
		enhanced: false
	},
	{
		name: 'KeyStore Explorer',
		title: 'GUI-based Key & Certificate Management Tool',
		description:
			'KeyStore Explorer is a GUI-based tool to manage cryptographic keys and certificates, helping in development and testing phases.',
		logo: keystoreExplorer,
		toolUrl: 'https://keystore-explorer.org',
		enhanced: true
	},
	{
		name: 'Toggl Track',
		title: 'Time Tracking Tool',
		description:
			'Toggl Track is a time tracking tool that assists in managing my daily tasks and tracking productivity.',
		logo: togglTrackLogo,
		toolUrl: 'https://www.toggl.com/track',
		enhanced: false
	},
	{
		name: 'Helm',
		title: 'Kubernetes Package Manager',
		description:
			'Helm is a Kubernetes package manager that simplifies the deployment and management of applications on Kubernetes clusters.',
		logo: helmLogo,
		toolUrl: 'https://helm.sh',
		enhanced: false
	},
	{
		name: 'Royal TSX',
		title: 'Connection Management Tool',
		description:
			'Royal TSX is a connection management tool that provides easy and secure access to remote systems.',
		logo: royalTSXLogo,
		toolUrl: 'https://www.royalapps.com/ts/mac/features',
		enhanced: true
	},
	{
		name: 'Poetry',
		title: 'Python Dependency Management Tool',
		description:
			'Poetry is a Python dependency management tool that simplifies package management and project environment setup.',
		logo: poetryLogo,
		toolUrl: 'https://python-poetry.org',
		enhanced: false
	},
	{
		name: 'Maccy',
		title: 'Clipboard Manager for macOS',
		description:
			'Maccy is a lightweight clipboard manager for macOS that improves productivity by keeping a history of the clipboard.',
		logo: maccyLogo,
		toolUrl: 'https://maccy.app',
		enhanced: true
	},
	{
		name: 'Balena Etcher',
		title: 'USB and SD Card Writing Tool',
		description:
			'Balena Etcher is a USB and SD card writing tool used to flash OS images onto memory cards or drives.',
		logo: balenaEtcherLogo,
		toolUrl: 'https://www.balena.io/etcher',
		enhanced: false
	},
	{
		name: 'SendGrid',
		title: 'Email Delivery Service',
		description:
			'SendGrid is an email delivery service that facilitates the sending of transactional or marketing emails.',
		logo: sendGridLogo,
		toolUrl: 'https://sendgrid.com',
		enhanced: false
	},
	{
		name: 'Insomnia',
		title: 'REST Client',
		description:
			'Insomnia is a powerful REST client that aids in testing, debugging, and interacting with HTTP APIs.',
		logo: insomniaLogo,
		toolUrl: 'https://insomnia.rest',
		enhanced: false
	},
	{
		name: 'Blender',
		title: '3D Modeling and Animation Software',
		description:
			'Blender is a 3D modeling and animation software used for creating and rendering 3D graphics and animations.',
		logo: blenderLogo,
		toolUrl: 'https://www.blender.org',
		enhanced: false
	},
	{
		name: 'Bitwarden',
		title: 'Open-source Password Manager',
		description:
			'Bitwarden is an open-source password manager that securely stores and manages passwords across devices.',
		logo: bitwardenLogo,
		toolUrl: 'https://bitwarden.com',
		enhanced: false
	},
	{
		name: 'Azure Data Studio',
		title: 'Cross-platform Database Tool',
		description:
			'Azure Data Studio is a cross-platform database tool that provides a modern editor experience for managing data across multiple sources.',
		logo: azureDataStudioLogo,
		toolUrl: 'https://azure.microsoft.com/products/data-studio',
		enhanced: true
	},
	{
		name: 'Wireshark',
		title: 'Network Protocol Analyzer',
		description:
			'Wireshark is a network protocol analyzer that helps me inspect and troubleshoot network traffic, providing in-depth insights.',
		logo: wiresharkLogo,
		toolUrl: 'https://www.wireshark.org',
		enhanced: true
	},
	{
		name: 'Rectangle',
		title: 'Window Management Tool for macOS',
		description:
			'Rectangle is a window management tool for macOS that provides keyboard shortcuts for resizing and organizing windows efficiently.',
		logo: rectangleLogo,
		toolUrl: 'https://rectangleapp.com/',
		enhanced: true
	},
	{
		name: 'PyCharm',
		title: 'Integrated Development Environment for Python',
		description:
			'An Integrated Development Environment (IDE) for Python, providing intelligent code assistance and debugging tools.',
		logo: pyCharmLogo,
		toolUrl: 'https://www.jetbrains.com/pycharm/',
		enhanced: false
	},
	{
		name: 'Docker',
		title: 'Containerization Platform',
		description:
			'A platform that enables the development, shipment, and running of applications inside containers, ensuring consistency across environments.',
		logo: dockerLogo,
		toolUrl: 'https://www.docker.com',
		enhanced: true
	},
	{
		name: 'Cyberduck',
		title: 'Server and Cloud Storage Browser',
		description:
			'A libre server and cloud storage browser for Mac and Windows, supporting various protocols and cloud providers.',
		logo: cyberduckLogo,
		toolUrl: 'https://cyberduck.io',
		enhanced: true
	},
	{
		name: 'Mullvad VPN',
		title: 'VPN Service',
		description:
			'A VPN service that prioritizes privacy and anonymity, keeping my online activities secure and private.',
		logo: mullvadVPNLogo,
		toolUrl: 'https://mullvad.net',
		enhanced: false
	},
	{
		name: 'jq',
		title: 'Command-line JSON Processor',
		description:
			'A lightweight and flexible command-line JSON processor, essential for parsing and manipulating JSON data in the shell.',
		logo: jqLogo,
		toolUrl: 'https://stedolan.github.io/jq/',
		enhanced: false
	},
	{
		name: 'Akamai',
		title: 'Global Content Delivery Network',
		description:
			'A global content delivery network, cybersecurity, and cloud service company, providing web and internet security services.',
		logo: akamaiLogo,
		toolUrl: 'https://www.akamai.com',
		enhanced: false
	},
	{
		name: 'CloudFlare',
		title: 'Content Delivery Network and Security Services',
		description:
			'A company that offers CDN services, DDoS mitigation, and distributed domain name server services to optimize and secure online content.',
		logo: cloudFlareLogo,
		toolUrl: 'https://www.cloudflare.com',
		enhanced: false
	},
	{
		name: 'Visual Studio Code',
		title: 'Code Editor',
		description:
			'A free, open-source code editor that offers powerful tools for code development, debugging, and extensions for various programming languages.',
		logo: visualStudioCodeLogo,
		toolUrl: 'https://code.visualstudio.com',
		enhanced: false
	},
	{
		name: 'OpsGenie',
		title: 'Alert and On-Call Management Platform',
		description:
			'An alert and on-call management platform that ensures critical alerts are never missed, improving incident response times.',
		logo: opsGenieLogo,
		toolUrl: 'https://www.atlassian.com/software/opsgenie',
		enhanced: false
	},
	{
		name: 'vim',
		title: 'Text Editor',
		description:
			'A highly configurable and efficient text editor that I use for editing code and text files from the command line.',
		logo: vimLogo,
		toolUrl: 'https://www.vim.org',
		enhanced: false
	},
	{
		name: 'Notion',
		title: 'Collaboration Platform',
		description:
			'A collaboration platform that combines note-taking, task management, and workflow management.',
		logo: notionLogo,
		toolUrl: 'https://www.notion.so',
		enhanced: false
	},
	{
		name: 'nvm',
		title: 'Node.js Version Manager',
		description:
			'A Node.js version manager that simplifies the installation and management of multiple Node.js versions.',
		logo: nvmLogo,
		toolUrl: 'https://github.com/nvm-sh/nvm',
		enhanced: false
	},
	{
		name: 'GIMP',
		title: 'Open-source Graphics Editor',
		description:
			'An open-source raster graphics editor used for tasks such as photo retouching, image editing, and composition.',
		logo: gIMPLogo,
		toolUrl: 'https://www.gimp.org',
		enhanced: false
	},
	{
		name: 'Azure Storage Explorer',
		title: 'Azure Storage Management Application',
		description: 'A standalone app that facilitates the management of Azure storage data.',
		logo: azureStorageExplorerLogo,
		toolUrl: 'https://azure.microsoft.com/products/storage/storage-explorer',
		enhanced: false
	},
	{
		name: 'Meld',
		title: 'Visual Diff and Merge Tool',
		description:
			'A visual diff and merge tool that provides clear comparisons between files and directories.',
		logo: meldLogo,
		toolUrl: 'https://meldmerge.org',
		enhanced: false
	},
	{
		name: 'Karabiner Elements',
		title: 'Keyboard Customizer for macOS',
		description:
			'A powerful keyboard customizer for macOS, providing multiple customization options for the keyboard.',
		logo: karabinerElementsLogo,
		toolUrl: 'https://karabiner-elements.pqrs.org',
		enhanced: true
	},
	{
		name: 'Kustomize',
		title: 'Kubernetes Configuration Customizer',
		description:
			'A template-free way to customize application configuration that simplifies the customization of Kubernetes YAML configuration files.',
		logo: kustomizeLogo,
		toolUrl: 'https://kustomize.io',
		enhanced: false
	},
	{
		name: 'InkScape',
		title: 'Open-source Vector Graphics Editor',
		description:
			'An open-source vector graphics editor, enabling the creation and editing of vector images.',
		logo: inkScapeLogo,
		toolUrl: 'https://inkscape.org',
		enhanced: false
	},
	{
		name: 'OBS',
		title: 'Open Broadcaster Software',
		description:
			'Open Broadcaster Software, a free and open-source tool for video recording and live streaming.',
		logo: oBSLogo,
		toolUrl: 'https://obsproject.com',
		enhanced: false
	},
	{
		name: 'WireGuard',
		title: 'Modern VPN Protocol',
		description:
			'A modern VPN protocol that aims for simplicity and speed, facilitating secure connections.',
		logo: wireGuardLogo,
		toolUrl: 'https://www.wireguard.com',
		enhanced: false
	},
	{
		name: 'SwitchHosts',
		title: 'Hosts File Manager',
		description:
			'An App for managing and switching hosts files, allowing me to easily switch between different environments.',
		logo: switchHostsLogo,
		toolUrl: 'https://switchhosts.vercel.app/',
		enhanced: false
	},
	{
		name: 'Slack',
		title: 'Collaboration Hub',
		description:
			'A collaboration hub that connects my work with the people I work with through channels, where communication and files are placed in one place.',
		logo: slackLogo,
		toolUrl: 'https://slack.com',
		enhanced: false
	},
	{
		name: 'nmap',
		title: 'Network Security Scanner',
		description:
			'A security scanner used to discover hosts and services on a computer network, providing a detailed view of the network.',
		logo: nmapLogo,
		toolUrl: 'https://nmap.org',
		enhanced: false
	},
	{
		name: 'DBeaver',
		title: 'Universal Database Tool',
		description:
			'A universal database tool for developers and database administrators that supports all popular databases.',
		logo: dBeaverLogo,
		toolUrl: 'https://dbeaver.io',
		enhanced: false
	},
	{
		name: 'OpenTofu',
		title: 'Infrastructure as Code Tool',
		description:
			'An open-source infrastructure as code tool that enables the automated creation, modification, and versioning of complex infrastructures.',
		logo: openTofuLogo,
		toolUrl: 'https://opentofu.org',
		enhanced: false
	},
	{
		name: 'GitLens',
		title: 'Git Extension for Visual Studio Code',
		description:
			'An extension for Visual Studio Code that supercharges the Git capabilities, providing advanced blame annotations, code lens, and more.',
		logo: gitLensLogo,
		toolUrl: 'https://gitlens.amod.io',
		enhanced: true
	}
];

export default tools;
