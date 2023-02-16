import React from "react";
import {UploadOutlined} from '@ant-design/icons';
import Button from "../../../../../WebstormProjects/Button/Button";
import InputFiles from "react-input-files";
import {Space} from 'antd';
import FileLink from "../../../../../WebstormProjects/FileLink/FileLink";
import {MdDelete} from "react-icons/md";
import {ConfirmButton} from "./ConfirmButton";
import {useTranslation} from "react-i18next";

const InputFile = ({
                     label = 'Загрузить', accept = '.pdf,.doc,.docx,.xls,.xlsx,image/*',
                     onChange, value, readOnly, ...rest
                   }) => {
  const {t} = useTranslation()

  const handleChange = (files) => {
    onChange(files[0]);
  }

  return (<>
    <Space direction="vertical">
      {value && <Space>
        <FileLink file={value}/>
        {!readOnly &&
          <ConfirmButton size="small" danger title={t('Удалить')} onConfirm={() => handleChange([])}>
            <MdDelete size="1.1em"/>
          </ConfirmButton>
        }
      </Space>}

      {!readOnly &&
        <InputFiles onChange={handleChange} accept={accept} {...rest}>
          <Button>
            <UploadOutlined/>
            {t(label)}
          </Button>
        </InputFiles>
      }
    </Space>
  </>)
}

export default InputFile
