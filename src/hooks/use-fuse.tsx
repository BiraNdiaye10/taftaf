import Fuse from 'fuse.js';

type Props = {
    list: any[];
    options: { keys: string[] };
};

type PropsResult = {
    search: (searchTerm: string) => Fuse.FuseResult<never>[];
};

export const useFuse = ({ list, options }: Props): PropsResult => {
    const fuse = new Fuse(list, options);

    const search = (searchTerm: string): Fuse.FuseResult<never>[] => fuse.search(searchTerm);

    return { search };
};
