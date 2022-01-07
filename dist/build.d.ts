export type Element = import('hast').Element;
export type Reserved = {
    name?: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
};
export type Assigned = {
    name: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
};
export type Iso31661 = {
    state: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
    name?: string;
};
export type Iso31662 = {
    code: string;
    name: string;
    parent?: string;
};
export type Iso31663 = {
    alpha4: string;
    type: string;
    from: Iso31663From;
    to: Array<Iso31663To>;
};
export type Iso31663From = {
    state: string | undefined;
    alpha2: string;
    alpha3: string;
    numeric?: string;
    name: string;
};
export type Iso31663To = {
    state: string | undefined;
    alpha2: string;
    alpha3: string;
    numeric?: string;
    name: string;
};
