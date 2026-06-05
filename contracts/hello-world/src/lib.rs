#![no_std]
use soroban_sdk::{contract, contractimpl, Env, String, Map, Symbol};

#[contract]
pub struct TodoContract;

#[contractimpl]
impl TodoContract {
    pub fn add_task(env: Env, task: String) -> u32 {
        let mut tasks: Map<u32, String> = env.storage().persistent()
            .get(&Symbol::new(&env, "tasks"))
            .unwrap_or(Map::new(&env));
        
        let mut count: u32 = env.storage().persistent()
            .get(&Symbol::new(&env, "count"))
            .unwrap_or(0u32);

        count += 1;
        tasks.set(count, task);

        env.storage().persistent().set(&Symbol::new(&env, "tasks"), &tasks);
        env.storage().persistent().set(&Symbol::new(&env, "count"), &count);

        count
    }

    pub fn get_tasks(env: Env) -> Map<u32, String> {
        env.storage().persistent()
            .get(&Symbol::new(&env, "tasks"))
            .unwrap_or(Map::new(&env))
    }

    pub fn delete_task(env: Env, id: u32) {
        let mut tasks: Map<u32, String> = env.storage().persistent()
            .get(&Symbol::new(&env, "tasks"))
            .unwrap_or(Map::new(&env));
        
        tasks.remove(id);
        env.storage().persistent().set(&Symbol::new(&env, "tasks"), &tasks);
    }
}
