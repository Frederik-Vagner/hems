export function orderByCompletedStatus<Type extends { completedAt?: Date }>(
  items: Type[]
): Type[] {
  const uncompletedItems = items.filter((item: Type) => !item.completedAt);
  const completedItems = items.filter((item: Type) => item.completedAt);

  return uncompletedItems.concat(completedItems);
}

/**
 * Orders the list so that completed items are at the bottom, and includes either all completed items or only the ones from the createdAt date.
 * @param items the items list.
 * @param showAll whether it should show all completed items or only the ones from the current date.
 * @returns filtered and ordered list.
 */
export function filterByCompletedAtAndOrderResults<
  Type extends { completedAt?: Date }
>(items: Type[], showAll: boolean, createdAt: Date): Type[] {
  let orderedItems = orderByCompletedStatus(items);
  const dateStart = new Date(createdAt);
  dateStart.setHours(0);
  dateStart.setMinutes(0);
  dateStart.setSeconds(0);
  const dateEnd = new Date(createdAt);
  dateEnd.setHours(23);
  dateEnd.setMinutes(59);
  dateEnd.setSeconds(59);

  if (!showAll) {
    orderedItems = orderedItems.filter((item) => {
      const itemDate = new Date(item.completedAt as unknown as string);
      return !item.completedAt || (itemDate > dateStart && itemDate < dateEnd);
    });
  }
  return orderedItems;
}
