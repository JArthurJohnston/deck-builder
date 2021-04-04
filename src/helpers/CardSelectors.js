export const isLand = card => card.type_line.includes("Land")
export const isNotLand = card => !isLand(card)