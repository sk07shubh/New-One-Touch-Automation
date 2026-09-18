import { CartItem } from '@/types/product';

const OWNER_WHATSAPP_NUMBER = '919922051400';

export const buildWhatsAppCartMessage = (items: CartItem[]) => {
  const machineLines = items.map((item, index) => {
    const variant = item.variant;
    const details = [
      `Variant: ${variant.name}`,
      `Model: ${variant.modelNo}`,
      variant.capacity ? `Capacity: ${variant.capacity}` : null,
      variant.size ? `Size: ${variant.size}` : null,
      variant.motor ? `Motor: ${variant.motor}` : null,
    ].filter(Boolean);

    return `${index + 1}. Machine: ${item.product.name}\n   ${details.join('\n   ')}\n   Quantity: ${item.quantity}`;
  });

  return [
    'Hello New One Touch,',
    '',
    'I would like to enquire about these machines:',
    '',
    machineLines.join('\n\n'),
    '',
    'Please share availability and a quotation. I will place the order by phone or offline.',
  ].join('\n');
};

export const getWhatsAppCartUrl = (items: CartItem[]) =>
  `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppCartMessage(items))}`;