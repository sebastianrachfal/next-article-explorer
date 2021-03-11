import hostname from '../../../config/hostname';
import { Tag } from './interfaces';

export const fetchTagStyles = async (): Promise<Tag[]> => {
	try {
		let data = await fetch(`${hostname}/api/graphql`, {
			method: 'POST',
			body: ` makeRestCall {
                get(path: "/tags?per_page=200") {
                    jsonBody
                }
            }`,
		}).then((r) => r.json());
		return data.makeRestCall.get.jsonBody;
	} catch (err) {
		throw new Error(err.message);
	}
};
