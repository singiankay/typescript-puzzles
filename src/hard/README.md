# Serialization
Create two functions called `serialize` and `deserialize`. The `serialize` function should accept a Javascript value and return a JSON compatible value. The `deserialize` function does the opposite.

# UUID Generator
Create a utility for generating a universally unique identifier. The identifier should include the following components:
- `type` - a 1 byte value that identifies the type of object
- `timestamp` - a 6 byte value that represents the number of milliseconds since the Unix epoch
- `random` - a 4 byte random value that is generated once per process
- `counter` - a 3 byte incrementing value that is initialized to a random value

# Execution Cache
Create a utility class that caches the result of an async execution. An execution is identified by a unique key and the cache should be able to store the result of the execution and return it if the same execution is requested.

# Downtime Logs
Create a utility function that merges the downtime logs pulled from multiple sources. The function should take in a list of downtime logs and merge them into a single set of downtime logs. Each set of downtime logs is represented as a list of tuples where each tuple represents a downtime period. The tuple contains two elements, the start time and the end time of the downtime period.

