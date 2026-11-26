/**
 * Landing v2 "Promocional" copy module.
 *
 * Every visible string on the page lives here, verbatim from the design mockup:
 * the components render, they do not author copy. Prices are the launch prices
 * the mockup ships (`L 399` / `L 699`); the marquee bar repeats the entry price,
 * so `promo.fromPrice` is the single source for both.
 */

export const brand = {
	name: 'Topica',
	logo: '/logo-topica-white.svg',
	tagline: 'Somos una plataforma dedicada al crecimiento de los negocios en línea.',
	whatsapp: {
		label: 'WhatsApp +504 9974-7054',
		href: 'https://wa.me/50499747054',
		number: '50499747054',
	},
	email: {
		label: 'sac@topica.online',
		href: 'mailto:sac@topica.online',
	},
	address: 'Plaza Andares, entre 12 y 13 avenida, 9 calle B.O., Bo. Los Andes, San Pedro Sula',
} as const;

export const seo = {
	title: 'El orden trae prosperidad | Catálogo, inventario y facturación | Topica',
	description:
		'Vende, factura y controla tu inventario desde un solo lugar. Planes desde L 399 al mes. Agenda una cita presencial en San Pedro Sula o virtual, sin compromiso.',
} as const;

/** Launch promo: the top bar, the hero price and the countdown all read this. */
export const promo = {
	fromPrice: 'L 399',
	bar: {
		label: 'Precio de lanzamiento: planes desde L 399 al mes',
		items: [
			'Precio de lanzamiento',
			'Planes desde L 399/mes',
			'Ecommerce y ventas en línea',
			'Atención presencial o virtual',
		],
		repeats: 6,
	},
	/** Offer end. Kept as an ISO string so the countdown is timezone-explicit. */
	endsAt: '2026-12-31T23:59:59-06:00',
} as const;

export const nav = {
	links: [
		{ label: 'Beneficios', href: '#beneficios' },
		{ label: 'Cómo funciona', href: '#como-funciona' },
		{ label: 'Planes', href: '#planes' },
	],
	cta: 'Agenda una cita',
} as const;

export const hero = {
	eyebrow: 'Precio de lanzamiento',
	titleLead: 'El orden trae',
	titleAccent: 'prosperidad',
	price: { from: 'DESDE', amount: promo.fromPrice, period: '/mes' },
	lead: 'Somos una plataforma dedicada al crecimiento de los negocios en línea. Vende, factura y controla tu inventario desde un solo lugar.',
	chips: ['Ecommerce', 'Ventas en línea', 'Productos y Pedidos', 'Ventas'],
	cta: 'Quiero el precio de lanzamiento',
	trust: 'Agenda tu cita presencial o virtual · Sin compromiso',
	countdown: {
		label: 'La oferta termina en',
		units: [
			{ key: 'days', label: 'días' },
			{ key: 'hours', label: 'horas' },
			{ key: 'minutes', label: 'min' },
			{ key: 'seconds', label: 'seg' },
		],
	},
	art: {
		ring: 'LANZAMIENTO · ',
		cai: 'CAI ✓',
		labels: {
			cube: 'Productos',
			cart: 'Ecommerce',
			bag: 'Ventas',
			globe: 'Ventas en línea',
		},
	},
} as const;

export const benefits = {
	eyebrow: 'Tu suscripción incluye',
	title: 'Todo lo que obtienes con tu suscripción',
	lead: 'Deja el cuaderno y el chat. Tu negocio queda ordenado en un solo panel.',
	items: [
		{
			icon: 'clipboard',
			title: 'Registro de pedidos',
			body: 'Cada venta queda anotada con su cliente, sus productos y su pago. Ningún pedido se pierde en el chat.',
		},
		{
			icon: 'boxes',
			title: 'Control de inventario',
			body: 'Cada venta descuenta sola. Sabes qué tienes, qué se está agotando y qué no se mueve.',
		},
		{
			icon: 'chart',
			title: 'Reportes de venta',
			body: 'Ventas del día, de la semana y del mes, listas para revisar sin sacar cuentas a mano.',
		},
		{
			icon: 'receipt',
			title: 'Facturación con CAI',
			body: 'Emite facturas autorizadas por el SAR, con su numeración en orden y sin talonario.',
			dark: true,
			pill: 'Plan Pyme',
		},
	],
} as const;

export const bigMarquee = {
	/** Rendered as one repeating string, six times, on a -1.5deg axis. */
	items: ['Ecommerce', 'Ventas en línea', 'Pedidos', 'Inventario', 'Facturación CAI'],
	separator: '✦',
	repeats: 6,
} as const;

export const howItWorks = {
	eyebrow: 'Cómo funciona',
	title: 'Empezar es más fácil de lo que crees',
	lead: 'No instalas nada ni necesitas saber de computación. Te acompañamos desde el primer día.',
	cta: 'Agenda una cita',
	steps: [
		{
			number: '01',
			title: 'Agendas tu cita',
			body: 'Presencial o virtual, como te quede mejor. Nos cuentas qué vendes y cómo lo haces hoy.',
		},
		{
			number: '02',
			title: 'Te mostramos el panel',
			body: 'Lo ves funcionando con tus propios productos y eliges el plan que te conviene.',
		},
		{
			number: '03',
			title: 'Empiezas a vender',
			body: 'Registras pedidos, controlas tu inventario y ves tus ventas desde el primer día.',
		},
	],
} as const;

export type Plan = {
	id: string;
	name: string;
	forWhom: string;
	amount: string;
	period: string;
	pill: string;
	featured: boolean;
	features: { label: string; included: boolean }[];
};

export const pricing = {
	eyebrow: 'Planes',
	title: 'Aprovecha el precio de lanzamiento',
	lead: 'Precios claros, en lempiras y sin sorpresas al final.',
	gift: 'Lanzamiento: te acompañamos a cargar tu catálogo.',
	cta: 'Quiero este plan',
	note: 'Precio mensual en lempiras.',
	help: '¿No sabes cuál elegir? Agenda una cita y te ayudamos a decidir.',
	currency: 'L',
	plans: [
		{
			id: 'basico',
			name: 'Básico Emprendedor',
			forWhom: 'Ideal para empezar a ordenar tu negocio.',
			amount: '399',
			period: '/mes',
			pill: 'Lanzamiento',
			featured: false,
			features: [
				{ label: '1 usuario', included: true },
				{ label: 'Registro de pedidos', included: true },
				{ label: 'Control de inventarios', included: true },
				{ label: 'Reportes de venta', included: true },
				{ label: 'Emisión de facturación CAI', included: false },
			],
		},
		{
			id: 'pyme',
			name: 'Pyme',
			forWhom: 'Para negocios que ya facturan todos los días.',
			amount: '699',
			period: '/mes',
			pill: 'Oferta especial · Más completo',
			featured: true,
			features: [
				{ label: '2 usuarios', included: true },
				{ label: 'Registro de pedidos', included: true },
				{ label: 'Control de inventarios', included: true },
				{ label: 'Reportes de venta', included: true },
				{ label: 'Emisión de facturación CAI', included: true },
			],
		},
	] satisfies Plan[],
} as const;

export const finalCta = {
	title: 'Empieza con una conversación, no con un contrato.',
	lead: 'Agenda una cita presencial o virtual. Te mostramos el panel con tus productos y te decimos con honestidad si te sirve.',
	cta: 'Agenda una cita',
	place: 'Presencial en Plaza Andares, San Pedro Sula, o virtual',
} as const;

export const footer = {
	tagline: brand.tagline,
	columns: [
		{
			title: 'Página',
			links: [
				{ label: 'Beneficios', href: '#beneficios' },
				{ label: 'Cómo funciona', href: '#como-funciona' },
				{ label: 'Planes', href: '#planes' },
			],
		},
		{
			title: 'Contacto',
			links: [
				{ label: brand.whatsapp.label, href: brand.whatsapp.href, external: true },
				{ label: brand.email.label, href: brand.email.href },
			],
			address: brand.address,
		},
	],
	legal: '© 2026 Topica. Todos los derechos reservados.',
	madeIn: 'Hecho en Honduras',
} as const;

/** Agenda modal: fields, modes, plan options and the success state. */
export const agenda = {
	title: 'Agenda una cita presencial o virtual',
	lead: 'Agenda tu cita presencial o virtual · Sin compromiso',
	close: 'Cerrar',
	fields: {
		name: { label: 'Nombre', placeholder: 'Tu nombre y apellido', required: true },
		business: {
			label: 'Nombre del negocio',
			placeholder: 'Ej. Tienda La Esperanza',
			required: true,
		},
		phone: { label: 'WhatsApp', placeholder: '+504 0000-0000', required: true },
	},
	modes: { legend: 'Modalidad', options: ['Presencial', 'Virtual'] },
	planField: { label: 'Plan de interés' },
	planOptions: [
		{ value: 'basico', label: 'Básico Emprendedor · L 399' },
		{ value: 'pyme', label: 'Pyme · L 699' },
		{ value: 'nose', label: 'Aún no sé' },
	],
	submit: 'Agendar mi cita',
	note: 'Te escribimos por WhatsApp. Sin llamadas automáticas.',
	fab: 'Agenda tu cita',
	perks: [
		'Te escribimos por WhatsApp, no te llamamos',
		'Lo ves funcionando con tus propios productos',
		'Sin contrato forzado ni costo de instalación',
	],
	fallback: {
		lead: 'No pudimos abrir WhatsApp. Escríbenos directo:',
	},
	success: {
		title: '¡Listo! Recibimos tu solicitud.',
		body: 'Te escribimos por WhatsApp en horario de oficina para confirmar el día y la hora de tu cita',
		modes: { Presencial: 'presencial', Virtual: 'virtual' },
	},
} as const;
