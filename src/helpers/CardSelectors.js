const cardTypeIs = (card, string) => card.type_line.includes(string);

export const isLand = (card) => cardTypeIs(card, "Land");
export const isEnchantment = (card) => cardTypeIs(card, "Enchantment");
export const isCreature = (card) => cardTypeIs(card, "Creature");
export const isArtifact = (card) => cardTypeIs(card, "Artifact");
export const isPlaneswalker = (card) => cardTypeIs(card, "Planeswalker");
export const isInstant = (card) => cardTypeIs(card, "Instant");
export const isSorcery = (card) => cardTypeIs(card, "Sorcery");
export const isSpell = (card) => cardTypeIs(card, "Sorcery") || cardTypeIs(card, "Instant");
export const isPermanent = (card) => !isSpell(card);

export const isNotLand = (card) => !isLand(card);
