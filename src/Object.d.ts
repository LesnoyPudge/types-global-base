


interface ObjectConstructor {
    keys<_Value extends UnknownRecord = UnknownStringRecord>(
        o: UnknownRecord
    ): (keyof _Value)[];
    
    entries<_Value extends UnknownRecord = UnknownStringRecord>(
        o: UnknownRecord
    ): [keyof _Value, _Value[keyof _Value]][];
}