export function cn(
    ...classes: Array<String | false | null | undefined>
): string {
    return classes.filter(Boolean).join(' ');
}