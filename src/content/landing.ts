/**
 * Landing copy, single source of truth.
 *
 * Derived from the approved copy spec exported with the Stitch project
 * (`contenido.md`). Do not paraphrase in section components: if a string needs
 * to change, change it here.
 *
 * Values the business still has to decide keep the `[DEFINIR]` marker from the
 * spec. `isPending()` is used by the UI to render them as visibly unfinished so
 * they cannot ship unnoticed.
 */

/** Marker used by the copy spec for data the business has not decided yet. */
export const PENDING = '[DEFINIR]';

export function isPending(value: string): boolean {
	return value.includes(PENDING);
}

export const brand = {
	name: 'Topica',
	tagline: 'Comercio & Bodega',
	monogram: 'T',
} as const;

export const nav = {
	links: [
		{ label: 'Catálogo', href: '#catalogo' },
		{ label: 'Inventario', href: '#inventario' },
		{ label: 'Envíos', href: '#envios' },
		{ label: 'Facturación SAR', href: '#facturacion' },
		{ label: 'Preguntas', href: '#preguntas' },
	],
	secondaryCta: { label: 'Ver precios', href: '#precios' },
	primaryCta: { label: 'Solicitar demostración', href: '#demostracion' },
} as const;

export const hero = {
	eyebrow: 'Para comercios que venden por WhatsApp, Instagram o en persona',
	title: 'Vende en línea sin contratar a nadie.',
	lead: 'Tu catálogo digital, tu inventario, tu pedidos y tu facturación en regla, desde un mismo panel. Y cuando el pedido sale, nosotros lo guardamos, lo empacamos y lo despachamos: tú solo programas la salida.',
	primaryCta: { label: 'Solicitar una demostración', href: '#demostracion' },
	secondaryCta: { label: 'Ver precios', href: '#precios' },
	microTrust:
		'Te acompañamos en la carga de tu catálogo. No necesitas computadora nueva ni conocimientos técnicos.',
	/* The hero visual: a real shipping waybill over a packed parcel, next to the
	 * panel. Figures are plausible mockup data, not claims. */
	waybill: {
		warehouse: 'TOPICA REG-04',
		state: 'PAQUETE CERRADO',
		label: 'Guía de Entrega',
		tracking: 'HN-TGU-9942',
		badge: 'DESPACHO HOY',
		rows: [
			{ label: 'Destinatario:', value: 'María López (WhatsApp)' },
			{ label: 'Dirección:', value: 'Col. Palmira, Ave. República' },
			{ label: 'Contenido:', value: '3x Café Marcala 454g' },
			{ label: 'Monto a cobrar:', value: 'L. 540.00 (Contra entrega)', numeric: true },
		],
		barcode: 'TRACK: HN-8820491-01',
	},
	panel: {
		title: 'Panel Topica',
		live: 'EN VIVO',
		metrics: [
			{ label: 'Por empacar', value: '14 pedidos' },
			{ label: 'Ventas de hoy', value: 'L. 8,420.00', accent: true },
		],
		ticket: {
			title: 'Ticket #1042 — WhatsApp',
			status: 'PAGADO',
			items: '2x Camisa Oxford L • 1x Gorra Canvas',
			cai: 'CAI: 893B-12',
			total: 'L. 1,150.00',
		},
		warehouseNote: 'Bodega: 3 pedidos listos para salir a ruta 2:00 PM',
	},
} as const;

export const trust = [
	{
		icon: 'material-symbols:verified-user',
		title: 'Factura en regla',
		text: 'Documentos fiscales autorizados, con su numeración y su vigencia.',
	},
	{
		icon: 'material-symbols:shield',
		title: 'Tu marca, separada',
		text: 'Cada marca o socio ve únicamente su propia información.',
	},
	{
		icon: 'material-symbols:inventory-2',
		title: 'Tu inventario, al día',
		text: 'Lo que vendes es lo que tienes; lo que no, no se vende.',
	},
	{
		icon: 'material-symbols:cloud-sync',
		title: 'Respaldo diario',
		text: 'Tu información se guarda todos los días, no solo cuando te acuerdas.',
	},
] as const;

export const problem = {
	title: 'Si tu negocio vive en un cuaderno y en WhatsApp, ya estás perdiendo.',
	items: [
		{
			icon: 'material-symbols:chat-bubble',
			title: 'El pedido que se perdió',
			text: 'Llegó el mensaje, te distrajiste, y a las tres horas el cliente ya compró en otro lado.',
		},
		{
			icon: 'material-symbols:inventory-2',
			title: 'El inventario que no existe',
			text: 'Vendiste algo que ya no tenías, o tienes diez unidades guardadas que ya nadie recuerda.',
		},
		{
			icon: 'material-symbols:receipt-long',
			title: 'La factura a mano',
			text: 'El talonario se tranca, el cliente que necesita crédito fiscal se va y el cierre del mes no cuadra.',
		},
		{
			icon: 'material-symbols:local-shipping',
			title: 'La tarde en la agencia',
			text: 'Empacar, cerrar, ir a dejar el paquete y todavía avisarle a cada cliente que ya salió.',
		},
	],
	closing:
		'No es que trabajes mal. Es que estás cargando cuatro trabajos a la vez: el de vendedor, el de bodeguero, el de contador y el de mensajero.',
} as const;

export const layers = {
	title: 'Cuatro cosas que hoy haces a mano, resueltas en un solo panel.',
	lead: 'No cambias cómo vendes. Cambias dónde queda todo anotado.',
	items: [
		{
			id: 'catalogo',
			icon: 'material-symbols:shopping-cart',
			kicker: 'Catálogo',
			title: 'Tu catálogo digital',
			text: 'Publica tus productos con foto, precio y variantes. Tu cliente ve lo que hay y pide desde ahí, sin que le mandes veinte fotos por chat.',
			cta: 'Ver un catálogo de ejemplo',
			pending: true,
		},
		{
			id: 'inventario',
			icon: 'material-symbols:inventory-2',
			kicker: 'Inventario',
			title: 'Tus productos y tu inventario',
			text: 'Cada venta descuenta. Cada entrada suma. Sabes qué se está moviendo y qué está parado, sin contar cajas a mano.',
			cta: null,
		},
		{
			icon: 'material-symbols:receipt-long',
			kicker: 'Facturación',
			title: 'Tu factura en regla',
			text: 'Emites factura con numeración autorizada, aplicas exonerados y anulas con nota de crédito. Sin talonario y sin enredos con el SAR.',
			cta: 'Ver cómo funciona la facturación',
			href: '#facturacion',
		},
		{
			icon: 'material-symbols:warehouse',
			kicker: 'Logística',
			title: 'Tu almacén y tus envíos',
			text: 'Guardamos tu producto, lo empacamos cuando entra el pedido y lo despachamos en la fecha que programes.',
			cta: 'Ver cómo funciona el envío',
			href: '#envios',
			kraft: true,
		},
	],
} as const;

export const logistics = {
	eyebrow: 'Lo que nos hace distintos',
	title: 'Tu producto no tiene que vivir en tu casa.',
	lead: 'Recibimos tu inventario, lo guardamos, y cuando entra un pedido lo empacamos con tu marca y lo despachamos. Tú eliges el día de salida. Nosotros nos encargamos del resto.',
	steps: [
		{
			title: 'Recibimos tu producto',
			text: 'Lo envías a nuestra bodega o coordinamos el retiro. Se registra y se cuenta al ingresar.',
		},
		{
			title: 'Lo guardamos',
			text: 'Queda en estantería, dentro del panel, disponible para vender desde el primer día.',
		},
		{
			title: 'Entra el pedido',
			text: 'Se descuenta del inventario solo. No hay doble venta ni conteo a mano.',
		},
		{
			title: 'Lo empacamos con tu marca',
			text: 'Caja, protectores y etiqueta del negocio. Si tienes varios locales o marcas, cada uno con su empaque.',
		},
		{
			title: 'Programas la salida',
			text: 'Defines la fecha y nosotros despachamos. El cliente recibe su guía y deja de preguntar "¿ya salió?".',
		},
	],
	fears: [
		{
			question: '¿Y si se pierde mi producto?',
			answer:
				'Cada ingreso queda registrado, y cada salida queda con su guía. El movimiento se puede revisar pedido por pedido.',
		},
		{
			question: '¿Y si mi producto no rota?',
			answer:
				'Se queda guardado, sin que ocupe tu casa ni tu tiempo. Tú decides cuándo entra la siguiente orden.',
		},
		{
			question: '¿Y si vendo poquito?',
			answer:
				'No necesitas volumen para empezar: empiezas con lo que tengas y creces cuando crezcas.',
		},
	],
	cta: 'Quiero saber si mi producto aplica',
} as const;

export const howItWorks = {
	title: 'Empezar toma menos de lo que crees.',
	steps: [
		{
			title: 'Nos cuentas qué vendes',
			text: 'Una llamada. Revisamos tu producto, tu volumen y cómo vendes hoy.',
		},
		{
			title: 'Cargamos tu catálogo contigo',
			text: 'Nosotros subimos productos, fotos, precios y variantes. Tú apruebas.',
		},
		{
			title: 'Recibimos tu inventario',
			text: 'Registramos la entrada, sea en tu local o en nuestra bodega.',
		},
		{
			title: 'Vendes',
			text: 'Cada pedido entra, se factura y se despacha. Tú miras cómo se mueve el negocio.',
		},
	],
	closing: 'Tú no instalas nada, no configuras nada y no contratas a nadie.',
} as const;

export const includes = {
	title: 'Lo que trae, sin letra chiquita.',
	groups: [
		{
			title: 'Vender',
			icon: 'material-symbols:storefront',
			items: [
				'Catálogo digital propio, con tu marca',
				'Productos con variantes, precio y foto',
				'Pedidos desde el catálogo o cargados a mano',
				'Pagos mixtos: parte en efectivo, parte en transferencia, parte con tarjeta',
				'Cupones y reglas de descuento',
			],
		},
		{
			title: 'Administrar',
			icon: 'material-symbols:bar-chart',
			items: [
				'Inventario que se descuenta solo con cada venta',
				'Alertas de lo que se está agotando',
				'Clientes con su historial de compras',
				'Usuarios con permisos por rol: tu bodeguero no ve tus costos',
				'Varias marcas o locales separados, cada uno con su propia información',
			],
		},
		{
			title: 'Cumplir y despachar',
			icon: 'material-symbols:receipt-long',
			items: [
				'Factura con numeración autorizada',
				'Tipos de documento fiscal y exonerados',
				'Notas de crédito y anulación, sin romper la numeración',
				'Almacenaje, empaque y despacho',
				'Programación de la fecha de salida y guía para el cliente',
			],
		},
		{
			title: 'Resúmenes',
			icon: 'material-symbols:trending-up',
			items: [
				'Ventas del día, de la semana y del mes',
				'Productos más vendidos y productos parados',
				'Cuentas por cobrar y por pagar',
				'Cierre por marca, por local y por vendedor',
			],
		},
	],
} as const;

export const billing = {
	title: 'La factura deja de ser el problema.',
	lead: 'El miedo más grande de un comercio chico es la factura: el talonario, el correlativo, el exonerado, la anulación que descuadra todo. Aquí eso está resuelto y queda registrado.',
	items: [
		{
			title: 'Numeración autorizada',
			text: 'Cada documento sale con su correlativo, sin saltos ni repetidos.',
		},
		{
			title: 'Tipos de documento',
			text: 'Factura, nota de crédito, y los regímenes especiales que tu negocio necesite.',
		},
		{
			title: 'Exonerados y descuentos',
			text: 'Se aplican sobre el documento y quedan explicados en él.',
		},
		{
			title: 'Vigencias',
			text: 'El panel controla cuándo un documento deja de ser válido.',
		},
		{
			title: 'Anulación con rastro',
			text: 'Se anula con nota de crédito: nunca se borra una venta.',
		},
		{
			title: 'Respaldo',
			text: 'Los documentos quedan guardados y se pueden volver a imprimir cuando el cliente los pida.',
		},
	],
	closing: 'No tienes que ser contador para facturar bien. Solo tienes que facturar desde aquí.',
} as const;

export const audience = {
	title: 'Seamos claros desde el principio.',
	yes: [
		'Vendes por Instagram, WhatsApp o en un local, y quieres tu propio catálogo.',
		'Manejas entre 20 y 500 productos y hoy el inventario vive en tu cabeza.',
		'Necesitas facturar y no quieres un talonario ni un contador de planta.',
		'Tus pedidos caben en cajas y necesitas que salgan a tiempo.',
	],
	no: [
		'Buscas un marketplace donde otros te traigan clientes. Esto es tu canal, no una vitrina prestada.',
		'Vendes solo servicios sin inventario ni envíos.',
		'Necesitas integrar tu propia tienda ya existente sin cambiar nada.',
	],
} as const;

export const pricing = {
	title: 'Un precio claro, sin sorpresas al final.',
	plans: [
		{
			name: 'Catálogo',
			forWhom: 'Empieza a vender en línea',
			features: [
				{ label: 'Catálogo digital', included: true },
				{ label: 'Inventario', included: true },
				{ label: 'Facturación', included: false },
				{ label: 'Resúmenes', included: true, note: 'Básicos' },
				{ label: 'Almacenaje y empaque', included: false },
				{ label: 'Programación de envío', included: false },
			],
			price: PENDING,
		},
		{
			name: 'Operación',
			forWhom: 'Ya vende todos los días',
			featured: true,
			features: [
				{ label: 'Catálogo digital', included: true },
				{ label: 'Inventario', included: true },
				{ label: 'Facturación', included: true },
				{ label: 'Resúmenes', included: true, note: 'Completos' },
				{ label: 'Almacenaje y empaque', included: false },
				{ label: 'Programación de envío', included: false },
			],
			price: PENDING,
		},
		{
			name: 'Bodega y envíos',
			forWhom: 'Terceriza la logística completa',
			features: [
				{ label: 'Catálogo digital', included: true },
				{ label: 'Inventario', included: true },
				{ label: 'Facturación', included: true },
				{ label: 'Resúmenes', included: true, note: 'Completos' },
				{ label: 'Almacenaje y empaque', included: true },
				{ label: 'Programación de envío', included: true },
			],
			price: PENDING,
			priceNote: '+ costo por envío',
		},
	],
	note: 'Los envíos se cobran según destino y peso. El almacenaje se cobra por espacio ocupado, no por producto. Sin contrato forzado.',
} as const;

export const faq = {
	title: 'Lo que todos preguntan.',
	items: [
		{
			question: '¿Necesito saber de computación?',
			answer:
				'No. Se usa desde el navegador del teléfono o de la computadora. Si sabes usar WhatsApp, sabes usar esto. Y te acompañamos las primeras semanas.',
		},
		{
			question: '¿Tengo que cambiar mi forma de vender?',
			answer:
				'No. Sigues atendiendo por WhatsApp o en tu local. Solo que ahora el pedido se registra, se descuenta del inventario y sale facturado.',
		},
		{
			question: '¿Puedo facturar sin ser contador?',
			answer:
				'Sí. El panel maneja la numeración y los tipos de documento. Tu contador puede revisar los reportes cuando los necesite.',
		},
		{
			question: '¿Qué pasa si mi producto está en su bodega y quiero retirarlo?',
			answer: 'Se retira cuando lo pidas, con el registro de lo que entra y lo que sale.',
		},
		{
			question: '¿Cuánto tardo en tener mi catálogo listo?',
			answer: PENDING,
		},
		{
			question: '¿Mis clientes y mis precios se mezclan con los de otra marca?',
			answer: 'No. Cada marca ve solo lo suyo, y los permisos se asignan por usuario.',
		},
		{
			question: '¿Y si el negocio crece?',
			answer:
				'Agregas productos, usuarios y marcas sin cambiar de herramienta. Es la misma base con la que opera una distribuidora.',
		},
		{
			question: '¿Puedo ver una demostración antes de pagar?',
			answer: 'Sí. Se agenda una llamada y se muestra con tus propios productos.',
		},
		{
			question: '¿Qué pasa si dejo de pagar?',
			answer: PENDING,
		},
	],
} as const;

export const demo = {
	title: 'Empieza con una conversación, no con un contrato.',
	lead: 'Cuéntanos qué vendes y cuántos pedidos manejas. Te decimos con honestidad si esto te sirve o no.',
	fields: [
		{ name: 'nombre', label: 'Nombre', type: 'text', required: true },
		{ name: 'negocio', label: 'Negocio', type: 'text', required: true },
		{ name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
		{ name: 'producto', label: '¿Qué vendes?', type: 'text', required: true },
	],
	orderVolume: {
		label: 'Pedidos al mes (aproximado)',
		name: 'pedidos',
		options: ['Menos de 50', '50–200', '200–500', 'Más de 500'],
	},
	storageInterest: {
		label: '¿Te interesa el almacenaje?',
		name: 'almacenaje',
		options: ['Sí', 'No', 'No sé'],
	},
	submit: 'Quiero que me contacten',
	footnote: 'Te escribimos por WhatsApp en horario de oficina. Sin llamadas automáticas.',
	success: 'Recibido. Te escribimos hoy mismo por WhatsApp.',
	unconfigured:
		'El formulario todavía no está conectado a un destino. Escríbenos directo por WhatsApp.',
} as const;

export const footer = {
	tagline: 'Catálogo, inventario, facturación y envíos para comercios que venden todos los días.',
	address: PENDING,
	whatsapp: PENDING,
	email: PENDING,
	privacy: { label: 'Aviso de privacidad', href: '#privacidad' },
	madeIn: 'Hecho en Honduras.',
} as const;
