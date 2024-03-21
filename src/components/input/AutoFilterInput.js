import { useCallback, useEffect, useState } from "react";
import { isNull } from "../../utils/Utils";
import AutoFilterOption from "./AutoFilterOption";

const AutoFilterInput = ({ data, name, onChangeValue, placeHolder }) => {
  const [inputValue, setInputValue] = useState("");
  const [allOptions, setAllOptions] = useState([]);
  const [choosedOptions, setChoosedOptions] = useState(new Set());

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeOption = useCallback(
    (option) => {
      if (choosedOptions.has(option)) {
        choosedOptions.delete(option);
      } else {
        choosedOptions.add(option);
      }
      setChoosedOptions(new Set(choosedOptions));
      setInputValue("");
      onChangeValue(choosedOptions);
    },
    [onChangeValue, choosedOptions]
  );

  useEffect(() => {
    const parseData = () => {
      let key, option;
      if (isNull(name)) {
        return;
      }

      const ops = data?.map((item) => {
        let att = name?.split(".");
        key = att[0];
        option = item[key];
        for (let index = 1; index < att.length; index++) {
          key = att[index];
          option = option[key];
        }
        return option;
      });
      setAllOptions(ops);
    };

    parseData();
  }, [data, name]);

  return (
    <div>
      {[...choosedOptions].map((option, index) => (
        <span key={`filter-result-${index}`} className="d-block p-1">
          {option}
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        placeholder={placeHolder}
      />
      {inputValue.length !== 0 && (
        <AutoFilterOption
          highlightText={inputValue.toLowerCase()}
          options={allOptions?.filter((option) =>
            option?.toLowerCase().includes(inputValue.toLowerCase())
          )}
          onChangeOption={onChangeOption}
        />
      )}
    </div>
  );
};

export default AutoFilterInput;
