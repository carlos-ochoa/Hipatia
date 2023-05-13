import time
from algorithms.search import LinearSearch

ls = LinearSearch()

for n in [10000, 100000, 1000000]:
    test_list = [i for i in range(n)]
    start_time = time.time()
    ls.search(n-1, test_list)
    execution_time = time.time() - start_time
    print(f"Time elapsed for {n} elements, worst case. {execution_time} s")