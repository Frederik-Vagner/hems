export function orderByCompletedStatus<Type extends { completedAt?: Date }>(
  items: Type[]
): Type[] {
  const uncompletedItems = items.filter((item: Type) => !item.completedAt);
  const completedItems = items.filter((item: Type) => item.completedAt);

  return uncompletedItems.concat(completedItems);
}
