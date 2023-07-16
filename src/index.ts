type NullableNumber = number | null | undefined;
type NullableString = string | undefined;
type NullableStringArray = string[] | null;

type MyNonNullable<T> = T extends null | undefined ? never : T;

type NonNullableNumber = NonNullable<NullableNumber>;
type NonNullableString = NonNullable<NullableString>;
type NonNullableStringArray = NonNullable<NullableStringArray>;
