type Enumerate<N extends number, ACC extends number[] = []> = ACC['length'] extends N
    ? ACC[number]
    : Enumerate<N, [...ACC, ACC['length']]>

export type IntRange<FLOOR extends number, TOP extends number> = Exclude<Enumerate<TOP>, Enumerate<FLOOR>>