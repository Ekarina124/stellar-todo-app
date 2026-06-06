import { StellarContractsKit, FreighterAdapter } from 'stellar-contracts-kit';

export const CONTRACT_ID = 'CB3NXYZUHWG7PPTS3PIUPKTCUHBA5Q5TBGIYMHRRPRJNZLIWZRDGRQE3';

const freighter = new FreighterAdapter();

export const kit = new StellarContractsKit({
  network: 'mainnet',
  wallet: freighter,
  adapters: [freighter],
});

let client = null;

async function getClient() {
  if (!client) {
    client = await kit.contract(CONTRACT_ID);
  }
  return client;
}

export const connectWallet = async () => {
  await kit.connect();
};

export const todo = {
  get_tasks: async () => {
    const c = await getClient();
    return c.get_tasks.simulate();
  },
  add_task: async ({ task }) => {
    const c = await getClient();
    return c.add_task.invoke(task);
  },
  delete_task: async ({ id }) => {
    const c = await getClient();
    return c.delete_task.invoke(id);
  },
};
