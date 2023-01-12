#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

/**
 * test Contract
 */
#[ink::contract]
mod test {

    /**
     * Test Struct
     */
    #[ink(storage)]
    pub struct Test {
        value: bool,
    }

    /**
     * functions
     */
    impl Test {

        /**
         * constructor 
         * @param init_value
         */
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { 
                value: init_value 
            }
        }

        /**
         * defalut function
         */
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        /**
         * filp function
         */
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /**
         * get function
         */
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }

    /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
    /// module and test functions are marked with a `#[test]` attribute.
    /// The below code is technically just normal Rust code.
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// Imports `ink_lang` so we can use `#[ink::test]`.
        use ink_lang as ink;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            // call default function
            let test = Test::default();
            assert_eq!(test.get(), false);
        }

        /// We test a simple use case of our contract.
        #[ink::test]
        fn it_works() {
            let mut test = Test::new(false);
            assert_eq!(test.get(), false);
            // call flip function
            test.flip();
            assert_eq!(test.get(), true);
        }
    }
}
