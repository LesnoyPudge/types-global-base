


interface ObjectConstructor {
    keys<_Value extends Record<PropertyKey, unknown> = Record<string, unknown>>(
        o: Record<string, unknown>
    ): (keyof _Value)[];
}