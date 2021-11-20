
export const getDateString = (isoDateString: string): string => {
    const asDate = new Date(isoDateString)
    return asDate.toISOString().split('T')[0]
}