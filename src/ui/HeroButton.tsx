import { Button, Flex } from 'antd';
const HeroButton: React.FC = () => {
    return(
        <Flex gap="small" wrap="wrap">
            <Button type="primary" size='large'>Оставить заявку</Button>
            <Button size='large'>Узнать больше</Button>
        </Flex>
    )
}

export default HeroButton