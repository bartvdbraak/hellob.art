import GitHubLogo from '$lib/assets/tools/github.svg';
import OverleafLogo from '$lib/assets/tools/overleaf.svg';
import ArgoCDLogo from '$lib/assets/tools/argocd.svg';
import Studio3TLogo from '$lib/assets/tools/studio3t.svg';
import WarpLogo from '$lib/assets/tools/warp.svg';
import K9sLogo from '$lib/assets/tools/k9s.png';
import FigmaLogo from '$lib/assets/tools/figma.svg';
import AzureCLILogo from '$lib/assets/tools/azure-cli.svg';
import KeystoreExplorer from '$lib/assets/tools/keystore-exporer.png';
import TogglTrackLogo from '$lib/assets/tools/toggl-track.svg';
import HelmLogo from '$lib/assets/tools/helm.svg';
import RoyalTSXLogo from '$lib/assets/tools/royal-tsx.png';
import PoetryLogo from '$lib/assets/tools/poetry.svg';
import MaccyLogo from '$lib/assets/tools/maccy.png';
import BalenaEtcherLogo from '$lib/assets/tools/balena-etcher.svg';
import SendGridLogo from '$lib/assets/tools/sendgrid.svg';
import InsomniaLogo from '$lib/assets/tools/insomnia.svg';
import BlenderLogo from '$lib/assets/tools/blender.svg';
import BitwardenLogo from '$lib/assets/tools/bitwarden.svg';
import AzureDataStudioLogo from '$lib/assets/tools/azure-data-studio.png';
import WiresharkLogo from '$lib/assets/tools/wireshark.png';
import RectangleLogo from '$lib/assets/tools/rectangle.png';
import PyCharmLogo from '$lib/assets/tools/pycharm.svg';
import DockerLogo from '$lib/assets/tools/docker.webp';
import CyberduckLogo from '$lib/assets/tools/cyberduck.png';
import MullvadVPNLogo from '$lib/assets/tools/mullvad-vpn.svg';
import JqLogo from '$lib/assets/tools/jq.svg';
import AkamaiLogo from '$lib/assets/tools/akamai.svg';
import CloudFlareLogo from '$lib/assets/tools/cloudflare.svg';
import VisualStudioCodeLogo from '$lib/assets/tools/visual-studio-code.svg';
import OpsGenieLogo from '$lib/assets/tools/opsgenie.svg';
import VimLogo from '$lib/assets/tools/vim.svg';
import NotionLogo from '$lib/assets/tools/notion.svg';
import NvmLogo from '$lib/assets/tools/nvm.svg';
import GIMPLogo from '$lib/assets/tools/gimp.svg';
import AzureStorageExplorerLogo from '$lib/assets/tools/azure-storage-explorer.svg';
import MeldLogo from '$lib/assets/tools/meld.svg';
import KarabinerElementsLogo from '$lib/assets/tools/karabiner-elements.png';
import KustomizeLogo from '$lib/assets/tools/kustomize.svg';
import InkScapeLogo from '$lib/assets/tools/inkscape.svg';
import OBSLogo from '$lib/assets/tools/obs.svg';
import WireGuardLogo from '$lib/assets/tools/wireguard.svg';
import SwitchHostsLogo from '$lib/assets/tools/switchhosts.svg';
import SlackLogo from '$lib/assets/tools/slack.svg';
import NmapLogo from '$lib/assets/tools/nmap.svg';
import DBeaverLogo from '$lib/assets/tools/dbeaver.svg';
import OpenTofuLogo from '$lib/assets/tools/opentofu.svg';
import GitLensLogo from '$lib/assets/tools/gitlens.png';

export {
	GitHubLogo,
	OverleafLogo,
	ArgoCDLogo,
	Studio3TLogo,
	WarpLogo,
	K9sLogo,
	FigmaLogo,
	AzureCLILogo,
	KeystoreExplorer,
	TogglTrackLogo,
	HelmLogo,
	RoyalTSXLogo,
	PoetryLogo,
	MaccyLogo,
	BalenaEtcherLogo,
	SendGridLogo,
	InsomniaLogo,
	BlenderLogo,
	BitwardenLogo,
	AzureDataStudioLogo,
	RectangleLogo,
	PyCharmLogo,
	DockerLogo,
	CyberduckLogo,
	MullvadVPNLogo,
	JqLogo,
	AkamaiLogo,
	CloudFlareLogo,
	VisualStudioCodeLogo,
	OpsGenieLogo,
	VimLogo,
	NotionLogo,
	NvmLogo,
	GIMPLogo,
	AzureStorageExplorerLogo,
	MeldLogo,
	KarabinerElementsLogo,
	KustomizeLogo,
	InkScapeLogo,
	OBSLogo,
	WireGuardLogo,
	SwitchHostsLogo,
	WiresharkLogo,
	SlackLogo,
	NmapLogo,
	DBeaverLogo,
	OpenTofuLogo,
	GitLensLogo
};

export interface Tool {
	name: string;
	title: string;
	description: string;
	logo: string;
	toolUrl: string;
}

const tools: Tool[] = [
	{
		name: 'GitHub',
		title: 'A complete developer platform',
		description:
			'A platform for hosting and collaborating on code, providing version control, issue tracking, and code review.',
		logo: GitHubLogo,
		toolUrl: 'https://github.com'
	},
	{
		name: 'Overleaf',
		title: 'Online LaTeX Editor',
		description:
			'Overleaf provides a collaborative environment for writing and publishing LaTeX documents. I use it for crafting scientific papers, technical documents, and more.',
		logo: OverleafLogo,
		toolUrl: 'https://www.overleaf.com'
	},
	{
		name: 'ArgoCD',
		title: 'Declarative GitOps Continuous Delivery',
		description:
			'ArgoCD is vital for deploying applications in a declarative way, using Git as the source of truth. It helps me to manage and automate deployments across different environments.',
		logo: ArgoCDLogo,
		toolUrl: 'https://argoproj.github.io/cd/'
	},
	{
		name: 'Studio 3T',
		title: 'MongoDB Development Tool',
		description:
			'Studio 3T simplifies working with MongoDB, providing useful features for managing databases, collections, and queries.',
		logo: Studio3TLogo,
		toolUrl: 'https://www.studio3t.com'
	},
	{
		name: 'Warp',
		title: 'Fast and Secure VPN',
		description:
			'Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.',
		logo: WarpLogo,
		toolUrl: 'https://warp.dev'
	},
	{
		name: 'k9s',
		title: 'Kubernetes Terminal',
		description:
			'k9s is a Kubernetes terminal that provides an easy interface to interact with clusters, aiding in managing and observing Kubernetes resources.',
		logo: K9sLogo,
		toolUrl: 'https://k9scli.io'
	},
	{
		name: 'Figma',
		title: 'Collaborative Design Tool',
		description:
			'Figma is a collaborative design tool that helps in creating, testing, and sharing user interfaces for applications and websites.',
		logo: FigmaLogo,
		toolUrl: 'https://www.figma.com'
	},
	{
		name: 'Azure CLI',
		title: 'Command-line Interface for Azure',
		description:
			'Azure CLI is a command-line interface for managing Azure resources, enabling quick administration of my Azure-hosted applications and services.',
		logo: AzureCLILogo,
		toolUrl: 'https://docs.microsoft.com/cli/azure'
	},
	{
		name: 'KeyStore Explorer',
		title: 'GUI-based Key & Certificate Management Tool',
		description:
			'KeyStore Explorer is a GUI-based tool to manage cryptographic keys and certificates, helping in development and testing phases.',
		logo: KeystoreExplorer,
		toolUrl: 'https://keystore-explorer.org'
	},
	{
		name: 'Toggl Track',
		title: 'Time Tracking Tool',
		description:
			'Toggl Track is a time tracking tool that assists in managing my daily tasks and tracking productivity.',
		logo: TogglTrackLogo,
		toolUrl: 'https://www.toggl.com/track'
	},
	{
		name: 'Helm',
		title: 'Kubernetes Package Manager',
		description:
			'Helm is a Kubernetes package manager that simplifies the deployment and management of applications on Kubernetes clusters.',
		logo: HelmLogo,
		toolUrl: 'https://helm.sh'
	},
	{
		name: 'Royal TSX',
		title: 'Connection Management Tool',
		description:
			'Royal TSX is a connection management tool that provides easy and secure access to remote systems.',
		logo: RoyalTSXLogo,
		toolUrl: 'https://www.royalapps.com/ts/mac/features'
	},
	{
		name: 'Poetry',
		title: 'Python Dependency Management Tool',
		description:
			'Poetry is a Python dependency management tool that simplifies package management and project environment setup.',
		logo: PoetryLogo,
		toolUrl: 'https://python-poetry.org'
	},
	{
		name: 'Maccy',
		title: 'Clipboard Manager for macOS',
		description:
			'Maccy is a lightweight clipboard manager for macOS that improves productivity by keeping a history of the clipboard.',
		logo: MaccyLogo,
		toolUrl: 'https://maccy.app'
	},
	{
		name: 'Balena Etcher',
		title: 'USB and SD Card Writing Tool',
		description:
			'Balena Etcher is a USB and SD card writing tool used to flash OS images onto memory cards or drives.',
		logo: BalenaEtcherLogo,
		toolUrl: 'https://www.balena.io/etcher'
	},
	{
		name: 'SendGrid',
		title: 'Email Delivery Service',
		description:
			'SendGrid is an email delivery service that facilitates the sending of transactional or marketing emails.',
		logo: SendGridLogo,
		toolUrl: 'https://sendgrid.com'
	},
	{
		name: 'Insomnia',
		title: 'REST Client',
		description:
			'Insomnia is a powerful REST client that aids in testing, debugging, and interacting with HTTP APIs.',
		logo: InsomniaLogo,
		toolUrl: 'https://insomnia.rest'
	},
	{
		name: 'Blender',
		title: '3D Modeling and Animation Software',
		description:
			'Blender is a 3D modeling and animation software used for creating and rendering 3D graphics and animations.',
		logo: BlenderLogo,
		toolUrl: 'https://www.blender.org'
	},
	{
		name: 'Bitwarden',
		title: 'Open-source Password Manager',
		description:
			'Bitwarden is an open-source password manager that securely stores and manages passwords across devices.',
		logo: BitwardenLogo,
		toolUrl: 'https://bitwarden.com'
	},
	{
		name: 'Azure Data Studio',
		title: 'Cross-platform Database Tool',
		description:
			'Azure Data Studio is a cross-platform database tool that provides a modern editor experience for managing data across multiple sources.',
		logo: AzureDataStudioLogo,
		toolUrl: 'https://azure.microsoft.com/products/data-studio'
	},
	{
		name: 'Wireshark',
		title: 'Network Protocol Analyzer',
		description:
			'Wireshark is a network protocol analyzer that helps me inspect and troubleshoot network traffic, providing in-depth insights.',
		logo: WiresharkLogo,
		toolUrl: 'https://www.wireshark.org'
	},
	{
		name: 'Rectangle',
		title: 'Window Management Tool for macOS',
		description:
			'Rectangle is a window management tool for macOS that provides keyboard shortcuts for resizing and organizing windows efficiently.',
		logo: RectangleLogo,
		toolUrl: 'https://rectangleapp.com/'
	},
	{
		name: 'PyCharm',
		title: 'Integrated Development Environment for Python',
		description:
			'An Integrated Development Environment (IDE) for Python, providing intelligent code assistance and debugging tools.',
		logo: PyCharmLogo,
		toolUrl: 'https://www.jetbrains.com/pycharm/'
	},
	{
		name: 'Docker',
		title: 'Containerization Platform',
		description:
			'A platform that enables the development, shipment, and running of applications inside containers, ensuring consistency across environments.',
		logo: DockerLogo,
		toolUrl: 'https://www.docker.com'
	},
	{
		name: 'Cyberduck',
		title: 'Server and Cloud Storage Browser',
		description:
			'A libre server and cloud storage browser for Mac and Windows, supporting various protocols and cloud providers.',
		logo: CyberduckLogo,
		toolUrl: 'https://cyberduck.io'
	},
	{
		name: 'Mullvad VPN',
		title: 'VPN Service',
		description:
			'A VPN service that prioritizes privacy and anonymity, keeping my online activities secure and private.',
		logo: MullvadVPNLogo,
		toolUrl: 'https://mullvad.net'
	},
	{
		name: 'jq',
		title: 'Command-line JSON Processor',
		description:
			'A lightweight and flexible command-line JSON processor, essential for parsing and manipulating JSON data in the shell.',
		logo: JqLogo,
		toolUrl: 'https://stedolan.github.io/jq/'
	},
	{
		name: 'Akamai',
		title: 'Global Content Delivery Network',
		description:
			'A global content delivery network, cybersecurity, and cloud service company, providing web and internet security services.',
		logo: AkamaiLogo,
		toolUrl: 'https://www.akamai.com'
	},
	{
		name: 'CloudFlare',
		title: 'Content Delivery Network and Security Services',
		description:
			'A company that offers CDN services, DDoS mitigation, and distributed domain name server services to optimize and secure online content.',
		logo: CloudFlareLogo,
		toolUrl: 'https://www.cloudflare.com'
	},
	{
		name: 'Visual Studio Code',
		title: 'Code Editor',
		description:
			'A free, open-source code editor that offers powerful tools for code development, debugging, and extensions for various programming languages.',
		logo: VisualStudioCodeLogo,
		toolUrl: 'https://code.visualstudio.com'
	},
	{
		name: 'OpsGenie',
		title: 'Alert and On-Call Management Platform',
		description:
			'An alert and on-call management platform that ensures critical alerts are never missed, improving incident response times.',
		logo: OpsGenieLogo,
		toolUrl: 'https://www.atlassian.com/software/opsgenie'
	},
	{
		name: 'vim',
		title: 'Text Editor',
		description:
			'A highly configurable and efficient text editor that I use for editing code and text files from the command line.',
		logo: VimLogo,
		toolUrl: 'https://www.vim.org'
	},
	{
		name: 'Notion',
		title: 'Collaboration Platform',
		description:
			'A collaboration platform that combines note-taking, task management, and workflow management.',
		logo: NotionLogo,
		toolUrl: 'https://www.notion.so'
	},
	{
		name: 'nvm',
		title: 'Node.js Version Manager',
		description:
			'A Node.js version manager that simplifies the installation and management of multiple Node.js versions.',
		logo: NvmLogo,
		toolUrl: 'https://github.com/nvm-sh/nvm'
	},
	{
		name: 'GIMP',
		title: 'Open-source Graphics Editor',
		description:
			'An open-source raster graphics editor used for tasks such as photo retouching, image editing, and composition.',
		logo: GIMPLogo,
		toolUrl: 'https://www.gimp.org'
	},
	{
		name: 'Azure Storage Explorer',
		title: 'Azure Storage Management Application',
		description: 'A standalone app that facilitates the management of Azure storage data.',
		logo: AzureStorageExplorerLogo,
		toolUrl: 'https://azure.microsoft.com/products/storage/storage-explorer'
	},
	{
		name: 'Meld',
		title: 'Visual Diff and Merge Tool',
		description:
			'A visual diff and merge tool that provides clear comparisons between files and directories.',
		logo: MeldLogo,
		toolUrl: 'https://meldmerge.org'
	},
	{
		name: 'Karabiner Elements',
		title: 'Keyboard Customizer for macOS',
		description:
			'A powerful keyboard customizer for macOS, providing multiple customization options for the keyboard.',
		logo: KarabinerElementsLogo,
		toolUrl: 'https://karabiner-elements.pqrs.org'
	},
	{
		name: 'Kustomize',
		title: 'Kubernetes Configuration Customizer',
		description:
			'A template-free way to customize application configuration that simplifies the customization of Kubernetes YAML configuration files.',
		logo: KustomizeLogo,
		toolUrl: 'https://kustomize.io'
	},
	{
		name: 'InkScape',
		title: 'Open-source Vector Graphics Editor',
		description:
			'An open-source vector graphics editor, enabling the creation and editing of vector images.',
		logo: InkScapeLogo,
		toolUrl: 'https://inkscape.org'
	},
	{
		name: 'OBS',
		title: 'Open Broadcaster Software',
		description:
			'Open Broadcaster Software, a free and open-source tool for video recording and live streaming.',
		logo: OBSLogo,
		toolUrl: 'https://obsproject.com'
	},
	{
		name: 'WireGuard',
		title: 'Modern VPN Protocol',
		description:
			'A modern VPN protocol that aims for simplicity and speed, facilitating secure connections.',
		logo: WireGuardLogo,
		toolUrl: 'https://www.wireguard.com'
	},
	{
		name: 'SwitchHosts',
		title: 'Hosts File Manager',
		description:
			'An App for managing and switching hosts files, allowing me to easily switch between different environments.',
		logo: SwitchHostsLogo,
		toolUrl: 'https://switchhosts.vercel.app/'
	},
	{
		name: 'Slack',
		title: 'Collaboration Hub',
		description:
			'A collaboration hub that connects my work with the people I work with through channels, where communication and files are placed in one place.',
		logo: SlackLogo,
		toolUrl: 'https://slack.com'
	},
	{
		name: 'nmap',
		title: 'Network Security Scanner',
		description:
			'A security scanner used to discover hosts and services on a computer network, providing a detailed view of the network.',
		logo: NmapLogo,
		toolUrl: 'https://nmap.org'
	},
	{
		name: 'DBeaver',
		title: 'Universal Database Tool',
		description:
			'A universal database tool for developers and database administrators that supports all popular databases.',
		logo: DBeaverLogo,
		toolUrl: 'https://dbeaver.io'
	},
	{
		name: 'OpenTofu',
		title: 'Infrastructure as Code Tool',
		description:
			'An open-source infrastructure as code tool that enables the automated creation, modification, and versioning of complex infrastructures.',
		logo: OpenTofuLogo,
		toolUrl: 'https://opentofu.org'
	},
	{
		name: 'GitLens',
		title: 'Git Extension for Visual Studio Code',
		description:
			'An extension for Visual Studio Code that supercharges the Git capabilities, providing advanced blame annotations, code lens, and more.',
		logo: GitLensLogo,
		toolUrl: 'https://gitlens.amod.io'
	}
];

export default tools;
