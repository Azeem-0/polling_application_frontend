
import ManagePollParent from "@/components/poll/manage/ManagePollParent";
import { GetAllPolls } from "@/services/pollServices";
import { Poll } from "@/types/Poll";

export const revalidate = 10;

export default async function ManagePoll() {

    const polls: Poll[] = await GetAllPolls();


    return <ManagePollParent polls={polls} />
};