import pytest
from algorithms.search import LinearSearch
from tests.mocks_classes import TestClassMock

test_cases_basic_found = [
    (11, [1,2,3,11,3,4,5], [3]),
    (11, [1,2,3,11,10,2,11,11], [3,6,7]),
    (11.0, [1,2,3,11.0,3,4,5], [3]),
    (11, [1,2,3,11.0,10,2,11.0,11], [3,6]),
    ("apple", [1,2,"tree","apple"], [3]),
    ("apple", [1,2,"tree","apple","apple"], [3,4]),
     ({"name":"Joan"}, [TestClassMock("Carlos"), TestClassMock("Pedro"), TestClassMock("Joan")], [2]),
    ({"name":"Joan"}, [TestClassMock("Carlos"), TestClassMock("Pedro"), TestClassMock("Joan"), TestClassMock("Joan")], [2, 3]),
    ({"name":"Joan", "age":22}, [TestClassMock("Carlos",20), TestClassMock("Pedro",20), TestClassMock("Joan",22), TestClassMock("Joan",22)], [2,3])
]

test_cases_basic_not_found = [
    (11, [1,2,3,10,2,5], []),
    (11.0, [1,2,3,10,2,5], []),
    (11.0, [1,2,3,11,2,5], []),
    ("11", [1,2,3,"10","2","5"], []),
    ({"name":"Joan"}, [TestClassMock("Carlos"), TestClassMock("Pedro")], []),
    ({"name":"Joan", "age":22}, [TestClassMock("Carlos",20), TestClassMock("Pedro",20)], [])
]

test_cases_empty_list = [
    (1, [], []),
    ("str", [],[])
]

test_cases_unsupported = [
    (True, [1,2,3,4,5]),
    (False, [1,2,3,4,5]),
    (None, [1,2,3,4,5])
]

def setup_function():
    ls = LinearSearch()

@pytest.mark.parametrize("elem,l,result", test_cases_basic_found)
def test_basic_element_found(elem : int, l : list, result : list):
    value = ls.search(elem, l)
    assert value == result

@pytest.mark.parametrize("elem,l,result", test_cases_basic_not_found)
def test_basic_element_not_found(elem : int, l : list, result : list):
    value = ls.search(elem, l)
    assert value == result

@pytest.mark.parametrize("elem,l,result", test_cases_empty_list)
def test_search_in_empty_list(criteria : dict, l : list, result : list):
    value = ls.search(elem, l)
    assert value == result

@pytest.mark.parametrize("elem,l", test_cases_unsupported)
def test_unexpected_element(elem : object, l : list):
    with pytest.raises(ElementNotExpected):
        ls.search(elem, l)
    assert str(exc_info.value) == "An unsupported datatype was received for searching"